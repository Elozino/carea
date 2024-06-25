/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {paddingSizes, textSizes} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';

type IProps = {
  text: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  leftIconAction?: () => void;
  rightIconAction?: () => void;
};

const Topbar = ({
  text,
  leftIcon,
  rightIcon,
  leftIconAction,
  rightIconAction,
}: IProps) => {
  const theme = useCareaTheme();
  return (
    <View style={styles.wrapper}>
      <Pressable onPress={leftIconAction}>{leftIcon}</Pressable>
      <View style={{flex: 1}}>
        <Text style={[styles.title, {color: theme.text_1}]}>{text}</Text>
      </View>
      <Pressable onPress={rightIconAction}>{rightIcon}</Pressable>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingTop: paddingSizes.medium,
    paddingHorizontal: paddingSizes.medium,
    paddingBottom: Number(paddingSizes.medium) / 2,
  },
  title: {
    fontSize: textSizes.medium,
    fontWeight: '500',
  },
});
