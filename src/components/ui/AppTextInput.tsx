import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React from 'react';
import useCareaTheme from '../../hooks/useCareaTheme';
import {paddingSizes, textSizes} from '../../constants/styles';

type AppTextInputProps = TextInputProps & {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const AppTextInput = ({
  value,
  onChangeText,
  secureTextEntry,
  editable,
  placeholder,
  leftIcon,
  rightIcon,
}: AppTextInputProps) => {
  const theme = useCareaTheme();
  return (
    <View
      style={[
        styles.wrapper,
        {backgroundColor: theme.bg_2, borderColor: theme.btn_bg},
      ]}>
      {leftIcon}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.text_3}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={editable}
        style={[styles.input, {borderColor: theme.btn_bg}]}
      />
      {rightIcon}
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: paddingSizes.small,
    paddingVertical: paddingSizes.xSmall,
    borderRadius: 10,
    borderWidth: 0.3,
  },
  input: {
    fontSize: textSizes.base,
    flex: 1,
    paddingHorizontal: paddingSizes.small,
  },
});
