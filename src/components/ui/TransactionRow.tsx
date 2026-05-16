import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import useCareaTheme from '../../hooks/useCareaTheme';
import {IMAGES} from '../../constants/images';

type TransactionRowProps = {
  label: string;
  subLabel: string;
  amount: string;
  isCredit: boolean;
  imageKey?: string;
};

const TransactionRow = ({
  label,
  subLabel,
  amount,
  isCredit,
  imageKey,
}: TransactionRowProps) => {
  const theme = useCareaTheme();

  return (
    <View style={[styles.row, {borderBottomColor: theme.bg_2}]}>
      <View style={[styles.thumb, {backgroundColor: theme.bg_2}]}>
        {imageKey ? (
          <Image source={IMAGES.car} style={styles.image} resizeMode="cover" />
        ) : (
          <Text style={[styles.thumbText, {color: theme.text_3}]}>₩</Text>
        )}
      </View>
      <View style={styles.info}>
        <Text style={[styles.label, {color: theme.text_1}]}>{label}</Text>
        <Text style={[styles.sub, {color: theme.text_3}]}>{subLabel}</Text>
      </View>
      <Text style={[styles.amount, {color: isCredit ? '#22C55E' : '#EF4444'}]}>
        {isCredit ? '+' : '-'}
        {amount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  thumb: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  thumbText: {
    fontSize: 20,
  },
  info: {
    flex: 1,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 3,
  },
  sub: {
    fontSize: 12,
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
  },
});

export default TransactionRow;
