import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import PaymentMethodRow from '../../../components/ui/PaymentMethodRow';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ROUTES} from '../../../constants/enums';
import {
  WalletStackParams,
  WalletPaymentMethod,
} from '../../../types/navigation';
import {MOCK_PAYMENT_OPTIONS} from './walletMockData';

type Nav = NativeStackNavigationProp<WalletStackParams>;
type Route = RouteProp<WalletStackParams, 'WALLET_TOP_UP_METHOD'>;

const WalletTopUpMethod = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const route = useRoute<Route>();
  const {amount} = route.params;

  const [selected, setSelected] = useState<WalletPaymentMethod | null>(null);

  return (
    <SafeInset>
      <Topbar
        text="Top Up E-Wallet"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={[styles.content, {backgroundColor: theme.bg_1}]}
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.subtitle, {color: theme.text_3}]}>
          Select your payment method
        </Text>
        {MOCK_PAYMENT_OPTIONS.map(opt => (
          <PaymentMethodRow
            key={opt.key}
            method={opt.key}
            label={opt.label}
            detail={opt.detail}
            isConnected={!!opt.detail}
            isSelected={selected === opt.key}
            onPress={() => setSelected(opt.key)}
          />
        ))}
        <PaymentMethodRow
          method="card"
          label="Add New Card"
          isConnected={false}
          isSelected={false}
          onPress={() => navigation.navigate(ROUTES.ADD_CARD)}
        />
        <View style={styles.btnWrap}>
          <Button
            text="Continue"
            disabled={!selected}
            onPress={() =>
              navigation.navigate(ROUTES.WALLET_TOP_UP_PIN, {
                amount,
                method: selected!,
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
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },
  btnWrap: {
    marginTop: 24,
  },
  btn: {
    borderRadius: 30,
  },
});

export default WalletTopUpMethod;
