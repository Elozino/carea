import React from 'react';
import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import TransactionRow from '../../../components/ui/TransactionRow';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ROUTES} from '../../../constants/enums';
import {WalletStackParams, WalletTransaction} from '../../../types/navigation';
import {MOCK_BALANCE, MOCK_TRANSACTIONS} from './walletMockData';

type Nav = NativeStackNavigationProp<WalletStackParams>;

const WalletTransactionHistory = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();

  return (
    <SafeInset>
      <Topbar
        text="Transaction History"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <View style={[styles.summary, {backgroundColor: theme.bg_2}]}>
        <View style={[styles.avatar, {backgroundColor: theme.btn_bg}]}>
          <Text style={[styles.avatarInitials, {color: theme.btn_text}]}>
            AA
          </Text>
        </View>
        <View>
          <Text style={[styles.summaryName, {color: theme.text_1}]}>
            Andrew Ainsley
          </Text>
          <Text style={[styles.summaryBalance, {color: theme.text_3}]}>
            Balance: ${MOCK_BALANCE.toLocaleString('en-US')}
          </Text>
        </View>
      </View>
      <FlatList
        data={MOCK_TRANSACTIONS}
        keyExtractor={item => item.id}
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
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 14,
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitials: {
    fontSize: 16,
    fontWeight: '700',
  },
  summaryName: {
    fontSize: 16,
    fontWeight: '700',
  },
  summaryBalance: {
    fontSize: 13,
    marginTop: 2,
  },
  rowWrap: {
    paddingHorizontal: 20,
  },
  list: {
    paddingBottom: 40,
  },
});

export default WalletTransactionHistory;
