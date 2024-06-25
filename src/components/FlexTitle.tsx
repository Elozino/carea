import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {paddingSizes, textSizes} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';

const FlexTitle = ({title, btnTitle, onPress}) => {
  const theme = useCareaTheme();
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, {color: theme.text_1}]}>{title}</Text>
      <Pressable onPress={onPress} style={[styles.btnWrapper]}>
        <Text style={[styles.btnTitle, {color: theme.text_1}]}>{btnTitle}</Text>
      </Pressable>
    </View>
  );
};

export default FlexTitle;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: textSizes.normal,
    fontWeight: '500',
  },
  btnWrapper: {
    paddingVertical: paddingSizes.medium,
  },
  btnTitle: {
    fontSize: textSizes.base,
    fontWeight: '400',
  },
});
