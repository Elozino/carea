import React from 'react';
import {View, Text, Pressable, Switch, StyleSheet} from 'react-native';
import useCareaTheme from '../../hooks/useCareaTheme';

type SettingsRowProps = {
  label: string;
  value?: string;
  leftIcon?: React.ReactElement;
  rightElement?: 'arrow' | 'toggle' | 'none';
  active?: boolean;
  onPress?: () => void;
  onToggle?: (val: boolean) => void;
  dangerous?: boolean;
};

const SettingsRow = ({
  label,
  value,
  leftIcon,
  rightElement = 'arrow',
  active = false,
  onPress,
  onToggle,
  dangerous = false,
}: SettingsRowProps) => {
  const theme = useCareaTheme();
  const labelColorStyle = {
    color: dangerous ? '#FF4444' : theme.text_1,
  };

  return (
    <Pressable
      style={[styles.row, {borderBottomColor: theme.bg_2}]}
      onPress={onPress}>
      {leftIcon && <View style={styles.iconWrap}>{leftIcon}</View>}
      <Text
        style={[
          styles.label,
          labelColorStyle,
          !leftIcon && styles.labelNoIcon,
        ]}>
        {label}
      </Text>
      <View style={styles.right}>
        {value ? (
          <Text style={[styles.value, {color: theme.text_3}]}>{value}</Text>
        ) : null}
        {rightElement === 'arrow' && (
          <Text style={[styles.chevron, {color: theme.gray}]}>›</Text>
        )}
        {rightElement === 'toggle' && (
          <Switch
            value={active}
            onValueChange={onToggle}
            trackColor={{false: theme.bg_2, true: theme.btn_bg}}
            thumbColor={theme.white}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  labelNoIcon: {
    marginLeft: 0,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  value: {
    fontSize: 14,
  },
  chevron: {
    fontSize: 22,
    lineHeight: 24,
  },
});

export default SettingsRow;
