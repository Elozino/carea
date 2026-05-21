import React, {FC} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  borderWidths,
  componentSizes,
  opacityLevels,
  paddingSizes,
  radiusSizes,
  shadowPresets,
  textSizes,
  widthAndHeight,
} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';

type IButton = PressableProps & {
  style?: StyleProp<ViewStyle>;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  onPress?: () => void;
  icon?: JSX.Element;
};

export const Button: FC<IButton> = ({
  style,
  text,
  loading,
  textStyle,
  onPress,
  icon,
  ...rest
}) => {
  const theme = useCareaTheme();
  const isDisabled = loading || rest.disabled;

  return (
    <Pressable
      {...rest}
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor: theme.action.primaryBackground,
          borderColor: theme.glass.border.medium,
          shadowColor: theme.shadowColor,
          opacity: isDisabled ? opacityLevels.disabled : opacityLevels.strong,
        },
        style,
      ]}
      disabled={isDisabled}>
      {/* <View
        pointerEvents="none"
        style={[
          styles.membrane,
          {
            backgroundColor: theme.glass.highlight.soft,
            opacity: theme.isDark ? opacityLevels.faint : opacityLevels.muted,
          },
        ]}
      />
      <View
        pointerEvents="none"
        style={[
          styles.highlight,
          {backgroundColor: theme.glass.highlight.strong},
        ]}
      /> */}
      <View style={styles.content}>
        {icon}
        <Text
          style={[{color: theme.action.primaryText}, styles.text, textStyle]}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: textSizes.normal,
    fontWeight: '600',
  },
  btn: {
    width: widthAndHeight.full,
    height: componentSizes.buttonHeight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radiusSizes.pill,
    borderWidth: borderWidths.thin,
    overflow: 'hidden',
    ...shadowPresets.soft,
  },
  membrane: {
    ...StyleSheet.absoluteFillObject,
  },
  highlight: {
    position: 'absolute',
    top: borderWidths.thin,
    left: paddingSizes.small,
    right: paddingSizes.small,
    height: borderWidths.thin,
    borderRadius: radiusSizes.pill,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: paddingSizes.small,
  },
});
