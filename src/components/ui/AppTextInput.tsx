import {
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {BlurView} from 'expo-blur';
import useCareaTheme from '../../hooks/useCareaTheme';
import {paddingSizes, textSizes} from '../../constants/styles';

export type AppTextInputProps = TextInputProps & {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  /** Renders a floating label that lifts on focus. Falls back to `placeholder` behaviour if omitted. */
  label?: string;
  style?: ViewStyle;
  onPress?: () => void;
};

const RADIUS = 14;
const HEIGHT = 56;

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
  const isDark = theme.bg_1 !== '#fff';

  // ── Shared animation values ──────────────────────────────────────────────
  const focused = useSharedValue(0); // 0 → 1 via withTiming (drives color interpolation)
  const labelUp = useSharedValue(value ? 1 : 0); // 0 → 1 via withSpring (drives label float)
  const scale = useSharedValue(1); // spring-driven scale on the outer glow wrapper

  // Keep label up when value is set externally (controlled input)
  React.useEffect(() => {
    if (value) {
      labelUp.value = withSpring(1, {damping: 18, stiffness: 300});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // ── Handlers ─────────────────────────────────────────────────────────────
  const handleFocus = (e: any) => {
    focused.value = withTiming(1, {duration: 220});
    labelUp.value = withSpring(1, {damping: 18, stiffness: 300});
    scale.value = withSpring(1.012, {damping: 14, stiffness: 220});
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    focused.value = withTiming(0, {duration: 200});
    scale.value = withSpring(1, {damping: 14, stiffness: 220});
    if (!value) {
      labelUp.value = withSpring(0, {damping: 18, stiffness: 300});
    }
    onBlur?.(e);
  };

  const handleChangeText = (text: string) => {
    if (text.length > 0) {
      labelUp.value = withSpring(1, {damping: 18, stiffness: 300});
    }
    onChangeText?.(text);
  };

  // ── Animated styles ───────────────────────────────────────────────────────
  // Outer glow wrapper — lives OUTSIDE overflow:hidden so shadow renders fully
  const glowStyle = useAnimatedStyle(() => ({
    shadowOpacity: focused.value * 0.22,
    shadowRadius: focused.value * 18,
    transform: [{scale: scale.value}],
  }));

  // Inner container — border color only
  const containerStyle = useAnimatedStyle(() => ({
    borderColor: interpolateColor(
      focused.value,
      [0, 1],
      [
        isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.10)',
        isDark ? 'rgba(255,255,255,0.76)' : 'rgba(0,0,0,0.70)',
      ],
    ),
  }));

  // Floating label — translateY + opacity
  const labelStyle = useAnimatedStyle(() => ({
    transform: [{translateY: labelUp.value * -11}],
    opacity: 0.42 + labelUp.value * 0.5,
  }));

  // ── Theme-derived styles (computed once per render, not inline objects) ───
  const glowShadow = {shadowColor: theme.btn_bg};
  const membraneColor = {
    backgroundColor: isDark
      ? 'rgba(255,255,255,0.05)'
      : 'rgba(255,255,255,0.62)',
  };
  const highlightColor = {
    backgroundColor: isDark
      ? 'rgba(255,255,255,0.09)'
      : 'rgba(255,255,255,0.90)',
  };
  const labelColor = {
    color: isDark ? 'rgba(255,255,255,0.72)' : 'rgba(0,0,0,0.52)',
  };
  const inputColor = {color: theme.text_1};
  const inputMargin = {marginTop: label ? 14 : 0};
  const placeholderColor = isDark
    ? 'rgba(255,255,255,0.36)'
    : 'rgba(0,0,0,0.30)';
  const blurIntensity = isDark ? 32 : 20;
  const blurTint = isDark ? ('dark' as const) : ('light' as const);

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
    borderRadius: RADIUS,
    // Shadow offset is slightly below to suggest depth
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0, // animated
    ...Platform.select({android: {elevation: 2}}),
  },
  container: {
    height: HEIGHT,
    borderRadius: RADIUS,
    borderWidth: 1,
    overflow: 'hidden',
  },
  highlight: {
    position: 'absolute',
    top: 0,
    left: 10,
    right: 10,
    height: 1,
    borderRadius: 1,
  },
  membrane: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: RADIUS,
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
    left: 6,
    right: 6,
    fontSize: textSizes.base,
    fontWeight: '400',
  },
  input: {
    fontSize: textSizes.base,
    paddingHorizontal: 6,
    paddingVertical: 0,
  },
});
