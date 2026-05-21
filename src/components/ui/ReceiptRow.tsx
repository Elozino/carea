import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useCareaTheme from '../../hooks/useCareaTheme';

type ReceiptRowProps = {
  label: string;
  value: string;
};

const ReceiptRow = ({label, value}: ReceiptRowProps) => {
  const theme = useCareaTheme();

  return (
    <View style={styles.row}>
      <Text style={[styles.label, {color: theme.text_3}]}>{label}</Text>
      <Text style={[styles.value, {color: theme.text_1}]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'right',
    flex: 1,
    marginLeft: 16,
  },
});

export default ReceiptRow;
