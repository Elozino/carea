import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import {paddingSizes, textSizes} from '../../constants/styles';
import React from 'react';

const NavTopTab = ({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.navTopTab, style]}>
      <Text style={styles.NavTopTabText}>{title}</Text>
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
