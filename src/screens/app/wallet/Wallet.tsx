import React from 'react';
import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import WalletBalanceCard from '../../../components/ui/WalletBalanceCard';
import TransactionRow from '../../../components/ui/TransactionRow';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ROUTES} from '../../../constants/enums';
import {WalletStackParams, WalletTransaction} from '../../../types/navigation';
import {MOCK_BALANCE, MOCK_TRANSACTIONS} from './walletMockData';

type Nav = NativeStackNavigationProp<WalletStackParams>;

const Wallet = () => {
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();

  const preview = MOCK_TRANSACTIONS.slice(0, 4);

  return (
    <SafeInset>
      <Topbar text="My E-Wallet" />
      <FlatList
        data={preview}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <>
            <WalletBalanceCard balance={MOCK_BALANCE} last4="4679" />
            <View style={styles.tapUpWrap}>
              <Button
                text="Tap Up E-Wallet"
                onPress={() => navigation.navigate(ROUTES.WALLET_TOP_UP_AMOUNT)}
                style={styles.tapUpBtn}
              />
            </View>
            <View
              style={[styles.sectionHeader, {borderBottomColor: theme.bg_2}]}>
              <Text style={[styles.sectionTitle, {color: theme.text_1}]}>
                Transaction History
              </Text>
              <Pressable
                onPress={() => navigation.navigate(ROUTES.WALLET_TRANSACTIONS)}>
                <Text style={[styles.seeAll, {color: theme.text_3}]}>
                  See all
                </Text>
              </Pressable>
            </View>
          </>
        }
        renderItem={({item}: {item: WalletTransaction}) => (
          <Pressable
            style={styles.rowWrap}
            onPress={() =>
              navigation.navigate(ROUTES.WALLET_RECEIPT, {transaction: item})
            }>
            <TransactionRow
              label={item.label}
              subLabel={item.subLabel}
              amount={item.amount}
              isCredit={item.isCredit}
              imageKey={item.imageKey}
            />
          </Pressable>
        )}
        contentContainerStyle={[styles.list, {backgroundColor: theme.bg_1}]}
        showsVerticalScrollIndicator={false}
      />
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  tapUpWrap: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  tapUpBtn: {
    borderRadius: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 8,
    marginBottom: 4,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  seeAll: {
    fontSize: 14,
  },
  rowWrap: {
    paddingHorizontal: 20,
  },
  list: {
    paddingBottom: 40,
  },
});

export default Wallet;
