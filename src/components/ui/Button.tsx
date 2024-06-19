import React, {FC} from 'react';
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {textSizes, widthAndHeight} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';

type IButton = PressableProps & {
  style?: ViewStyle,
  text: string,
  textStyle?: TextStyle,
  loading?: boolean,
  onPress?: () => void,
};

export const Button: FC<IButton> = ({
  style,
  text,
  loading,
  textStyle,
  onPress,
}) => {
  const theme = useCareaTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[{backgroundColor: theme.btn_bg}, styles.btn, style]}
      disabled={loading}>
      <Text style={[{color: theme.btn_text}, styles.text, textStyle]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: textSizes.medium,
  },
  btn: {
    width: '100%',
    height: widthAndHeight.medium,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
