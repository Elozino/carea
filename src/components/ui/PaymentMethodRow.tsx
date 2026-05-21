import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import useCareaTheme from '../../hooks/useCareaTheme';
import type {WalletPaymentMethod} from '../../types/navigation';

const METHOD_LABEL: Record<WalletPaymentMethod | 'mastercard', string> = {
  paypal: 'P',
  googlepay: 'G',
  applepay: 'A',
  card: 'MC',
  mastercard: 'MC',
};

const METHOD_COLOR: Record<WalletPaymentMethod | 'mastercard', string> = {
  paypal: '#003087',
  googlepay: '#4285F4',
  applepay: '#000',
  card: '#EB001B',
  mastercard: '#EB001B',
};

type PaymentMethodRowProps = {
  method: WalletPaymentMethod | 'mastercard';
  label: string;
  detail?: string;
  isConnected?: boolean;
  isSelected?: boolean;
  onPress: () => void;
};

const PaymentMethodRow = ({
  method,
  label,
  detail,
  isConnected,
  isSelected,
  onPress,
}: PaymentMethodRowProps) => {
  const theme = useCareaTheme();
  const rowStyle = {
    backgroundColor: theme.bg_1,
    borderColor: isSelected ? theme.btn_bg : theme.bg_2,
    borderWidth: isSelected ? 2 : StyleSheet.hairlineWidth,
  };

  return (
    <Pressable style={[styles.row, rowStyle]} onPress={onPress}>
      <View style={[styles.logo, {backgroundColor: METHOD_COLOR[method]}]}>
        <Text style={styles.logoText}>{METHOD_LABEL[method]}</Text>
      </View>
      <Text style={[styles.label, {color: theme.text_1}]}>{label}</Text>
      {detail && (
        <Text style={[styles.detail, {color: theme.text_3}]}>{detail}</Text>
      )}
      {isConnected && !isSelected && (
        <View style={[styles.connectedBadge, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.connectedText, {color: theme.text_3}]}>
            Connected
          </Text>
        </View>
      )}
      {isSelected && (
        <View style={[styles.check, {backgroundColor: theme.btn_bg}]}>
          <Text style={[styles.checkText, {color: theme.btn_text}]}>✓</Text>
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 12,
  },
  label: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
  detail: {
    fontSize: 13,
    marginRight: 8,
  },
  connectedBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  connectedText: {
    fontSize: 12,
  },
  check: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkText: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default PaymentMethodRow;
