import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useCareaTheme from '../../hooks/useCareaTheme';

type WalletBalanceCardProps = {
  balance: number;
  cardLabel?: string;
  last4?: string;
};

const formatBalance = (n: number) => '$' + n.toLocaleString('en-US');

const WalletBalanceCard = ({
  balance,
  cardLabel = 'My E-Wallet',
  last4,
}: WalletBalanceCardProps) => {
  const theme = useCareaTheme();

  return (
    <View style={[styles.card, {backgroundColor: theme.btn_bg}]}>
      <View style={styles.topRow}>
        <Text style={[styles.cardLabel, {color: theme.btn_text}]}>
          {cardLabel}
        </Text>
        <View style={styles.networkRow}>
          <View style={[styles.circle, styles.circleLeft]} />
          <View style={[styles.circle, styles.circleRight]} />
        </View>
      </View>
      <Text style={[styles.balance, {color: theme.btn_text}]}>
        {formatBalance(balance)}
      </Text>
      <View style={styles.bottomRow}>
        {last4 ? (
          <Text style={[styles.cardNum, {color: theme.btn_text}]}>
            ●●●● ●●●● ●●●● {last4}
          </Text>
        ) : (
          <Text style={[styles.cardType, {color: theme.btn_text}]}>VISA</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardLabel: {
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.8,
  },
  networkRow: {
    flexDirection: 'row',
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    opacity: 0.8,
  },
  circleLeft: {
    backgroundColor: '#EB001B',
    marginRight: -8,
  },
  circleRight: {
    backgroundColor: '#F79E1B',
  },
  balance: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardNum: {
    fontSize: 13,
    letterSpacing: 2,
    opacity: 0.8,
  },
  cardType: {
    fontSize: 18,
    fontWeight: '800',
    fontStyle: 'italic',
    opacity: 0.9,
  },
});

export default WalletBalanceCard;
