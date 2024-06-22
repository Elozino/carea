/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {textSizes} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';

type IProps = {
  text: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

const Topbar = ({text, leftIcon, rightIcon}: IProps) => {
  const theme = useCareaTheme();
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
      <Pressable>{leftIcon}</Pressable>
      <View style={{flex: 1}}>
        <Text style={[styles.title, {color: theme.text_1}]}>{text}</Text>
      </View>
      <Pressable>{rightIcon}</Pressable>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  title: {
    fontSize: textSizes.medium,
    fontWeight: '500',
  },
});
