import React, {useState} from 'react';
import {View, Text, Pressable, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import NumericKeypad from '../../../components/ui/NumericKeypad';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ROUTES} from '../../../constants/enums';
import {WalletStackParams} from '../../../types/navigation';

type Nav = NativeStackNavigationProp<WalletStackParams>;

const QUICK_AMOUNTS = ['$10,000', '$50,000', '$100,000', '$200,000'];
const RAW_QUICK = [10000, 50000, 100000, 200000];

const formatDisplay = (raw: string) => {
  const n = parseInt(raw || '0', 10);
  if (!n) {
    return '';
  }
  return '$' + n.toLocaleString('en-US');
};

const WalletTopUpAmount = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const [rawAmount, setRawAmount] = useState('');

  const handleQuick = (val: number) => setRawAmount(String(val));

  const numericValue = parseInt(rawAmount || '0', 10);
  const canContinue = numericValue > 0;

  return (
    <SafeInset>
      <Topbar
        text="Top Up E-Wallet"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled">
        <Text style={[styles.prompt, {color: theme.text_3}]}>
          Enter the amount to top up
        </Text>
        <View style={[styles.amountBox, {backgroundColor: theme.bg_2}]}>
          <Text style={[styles.amountText, {color: theme.text_1}]}>
            {rawAmount ? formatDisplay(rawAmount) : '$0'}
          </Text>
        </View>
        <View style={styles.quickRow}>
          {QUICK_AMOUNTS.map((label, i) => (
            <Pressable
              key={label}
              style={[
                styles.quickChip,
                {
                  backgroundColor:
                    numericValue === RAW_QUICK[i] ? theme.btn_bg : theme.bg_2,
                },
              ]}
              onPress={() => handleQuick(RAW_QUICK[i])}>
              <Text
                style={[
                  styles.quickText,
                  {
                    color:
                      numericValue === RAW_QUICK[i]
                        ? theme.btn_text
                        : theme.text_1,
                  },
                ]}>
                {label}
              </Text>
            </Pressable>
          ))}
        </View>
        <NumericKeypad
          onDigitPress={d => setRawAmount(prev => (prev + d).slice(0, 9))}
          onDeletePress={() => setRawAmount(prev => prev.slice(0, -1))}
        />
        <View style={styles.btnWrap}>
          <Button
            text="Continue"
            disabled={!canContinue}
            onPress={() =>
              navigation.navigate(ROUTES.WALLET_TOP_UP_METHOD, {
                amount: formatDisplay(rawAmount),
              })
            }
            style={styles.btn}
          />
        </View>
      </ScrollView>
    </SafeInset>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  prompt: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 16,
  },
  amountBox: {
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  amountText: {
    fontSize: 36,
    fontWeight: '800',
  },
  quickRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  quickChip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 24,
  },
  quickText: {
    fontSize: 14,
    fontWeight: '600',
  },
  btnWrap: {
    marginTop: 16,
  },
  btn: {
    borderRadius: 30,
  },
});

export default WalletTopUpAmount;
