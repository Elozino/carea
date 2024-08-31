import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {paddingSizes, textSizes} from '../../constants/styles';
import React from 'react';
import useCareaTheme from '../../hooks/useCareaTheme';

const NavTopTab = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}) => {
  const theme = useCareaTheme();
  return (
    <Pressable onPress={onPress} style={[styles.navTopTab, style]}>
      <Text style={[styles.NavTopTabText, {color: theme.btn_bg}]}>{title}</Text>
    </Pressable>
  );
};

export default NavTopTab;

const styles = StyleSheet.create({
  navTopTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: paddingSizes.medium,
    borderBottomWidth: 1,
  },
  NavTopTabText: {
    fontSize: textSizes.normal,
    fontWeight: '500',
  },
});
