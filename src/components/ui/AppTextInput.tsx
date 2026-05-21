import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {BlurView} from 'expo-blur';
import useCareaTheme from '../../hooks/useCareaTheme';
import {
  borderWidths,
  componentSizes,
  interactionScales,
  motionDurations,
  motionSprings,
  opacityLevels,
  paddingSizes,
  radiusSizes,
  shadowPresets,
  textSizes,
} from '../../constants/styles';

export type AppTextInputProps = TextInputProps & {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  /** Renders a floating label that lifts on focus. Falls back to `placeholder` behaviour if omitted. */
  label?: string;
  style?: ViewStyle;
  onPress?: () => void;
};

const AppTextInput = ({
  value,
  onChangeText,
  secureTextEntry,
  editable,
  placeholder,
  label,
  leftIcon,
  rightIcon,
  style,
  onPress,
  onFocus,
  onBlur,
  ...rest
}: AppTextInputProps) => {
  const theme = useCareaTheme();

  // ── Shared animation values ──────────────────────────────────────────────
  const focused = useSharedValue(0); // 0 → 1 via withTiming (drives color interpolation)
  const labelUp = useSharedValue(value ? 1 : 0); // 0 → 1 via withSpring (drives label float)
  const scale = useSharedValue(interactionScales.rest); // spring-driven scale on the outer glow wrapper

  // Keep label up when value is set externally (controlled input)
  React.useEffect(() => {
    if (value) {
      labelUp.value = withSpring(1, motionSprings.default);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleFocus = (e: any) => {
    focused.value = withTiming(1, {duration: motionDurations.normal});
    labelUp.value = withSpring(1, motionSprings.default);
    scale.value = withSpring(interactionScales.subtle, motionSprings.press);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    focused.value = withTiming(0, {duration: motionDurations.fast});
    scale.value = withSpring(interactionScales.rest, motionSprings.press);
    if (!value) {
      labelUp.value = withSpring(0, motionSprings.default);
    }
    onBlur?.(e);
  };

  const handleChangeText = (text: string) => {
    if (text.length > 0) {
      labelUp.value = withSpring(1, motionSprings.default);
    }
    onChangeText?.(text);
  };

  // ── Animated styles ───────────────────────────────────────────────────────
  // Outer glow wrapper — lives OUTSIDE overflow:hidden so shadow renders fully
  const glowStyle = useAnimatedStyle(() => ({
    shadowOpacity: interpolate(focused.value, [0, 1], [0, opacityLevels.faint]),
    shadowRadius: interpolate(focused.value, [0, 1], [0, paddingSizes.large]),
    transform: [{scale: scale.value}],
  }));

  // Inner container — border color only
  const containerStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(
      focused.value,
      [0, 1],
      [theme.glass.border.subtle, theme.accent.secondary],
    ),
  }));

  // Floating label — translateY + opacity
  const labelStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          labelUp.value,
          [0, 1],
          [0, -paddingSizes.small],
        ),
      },
    ],
    opacity: interpolate(
      labelUp.value,
      [0, 1],
      [opacityLevels.muted, opacityLevels.strong],
    ),
  }));

  // ── Theme-derived styles (computed once per render, not inline objects) ───
  const glowShadow = {shadowColor: theme.accent.primary};
  const membraneColor = {backgroundColor: theme.glass.background.medium};
  const highlightColor = {backgroundColor: theme.glass.highlight.soft};
  const labelColor = {color: theme.text.secondary};
  const inputColor = {color: theme.text_1};
  const inputMargin = {marginTop: label ? paddingSizes.small : 0};
  const placeholderColor = theme.text.tertiary;
  const blurIntensity = theme.glass.blurIntensity.medium;
  const blurTint = theme.glass.blurTint;

  return (
    <Pressable onPress={onPress} style={style}>
      {/* Outer wrapper carries the focus-glow shadow without being clipped */}
      <Animated.View style={[styles.glowWrap, glowShadow, glowStyle]}>
        {/* Inner container clips the BlurView to the border radius */}
        <Animated.View style={[styles.container, containerStyle]}>
          {/* ① Frosted glass substrate */}
          <BlurView
            intensity={blurIntensity}
            tint={blurTint}
            style={StyleSheet.absoluteFill}
          />

          {/* ② Tinted glass membrane */}
          <View style={[styles.membrane, membraneColor]} />

          {/* ③ Top specular highlight — simulates light catching the glass edge */}
          <View style={[styles.highlight, highlightColor]} />

          {/* ④ Content row */}
          <View style={styles.row}>
            {leftIcon && <View style={styles.iconWrap}>{leftIcon}</View>}

            <View style={styles.inputWrap}>
              {label ? (
                <Animated.Text
                  style={[styles.floatingLabel, labelColor, labelStyle]}>
                  {label}
                </Animated.Text>
              ) : null}

              <TextInput
                placeholder={label ? undefined : placeholder}
                placeholderTextColor={placeholderColor}
                value={value}
                onChangeText={handleChangeText}
                secureTextEntry={secureTextEntry}
                editable={editable}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={[styles.input, inputColor, inputMargin]}
                caretHidden={false}
                {...rest}
              />
            </View>

            {rightIcon && <View style={styles.iconWrap}>{rightIcon}</View>}
          </View>
        </Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  glowWrap: {
    borderRadius: radiusSizes.medium,
    ...shadowPresets.soft,
    shadowOpacity: 0, // animated
  },
  container: {
    height: componentSizes.inputHeight,
    borderRadius: radiusSizes.medium,
    borderWidth: borderWidths.thin,
    overflow: 'hidden',
  },
  highlight: {
    position: 'absolute',
    top: 0,
    left: paddingSizes.small,
    right: paddingSizes.small,
    height: borderWidths.thin,
    borderRadius: borderWidths.thin,
  },
  membrane: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: radiusSizes.medium,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: paddingSizes.small,
  },
  iconWrap: {
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  floatingLabel: {
    position: 'absolute',
    left: borderWidths.thick + paddingSizes.xSmall,
    right: borderWidths.thick + paddingSizes.xSmall,
    fontSize: textSizes.base,
    fontWeight: '400',
  },
  input: {
    fontSize: textSizes.base,
    paddingHorizontal: borderWidths.thick + paddingSizes.xSmall,
    paddingVertical: 0,
  },
});
