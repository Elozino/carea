import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {getFontSize, paddingSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';

const Badge = ({text}: {text: string}) => {
  const theme = useCareaTheme();
  return (
    <Pressable
      style={[
        styles.wrapper,
        {backgroundColor: theme.gray, borderRadius: getFontSize(5)},
      ]}>
      <Text style={{color: theme?.btn_bg1, ...styles.text}}>{text}</Text>
    </Pressable>
  );
};

export default Badge;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: paddingSizes.small,
    paddingVertical: paddingSizes.xSmall,
  },
  text: {
    fontSize: getFontSize(10),
  },
});
