import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import PaymentMethodRow from '../../../components/ui/PaymentMethodRow';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ROUTES} from '../../../constants/enums';
import {ProfileStackParams} from '../../../types/navigation';
import {MOCK_PAYMENT_OPTIONS} from '../wallet/walletMockData';

type Nav = NativeStackNavigationProp<ProfileStackParams>;

const PaymentMethods = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();

  return (
    <SafeInset>
      <Topbar
        text="Payment"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        {MOCK_PAYMENT_OPTIONS.map(opt => (
          <PaymentMethodRow
            key={opt.key}
            method={opt.key}
            label={opt.label}
            detail={opt.detail}
            isConnected={!!opt.detail}
            onPress={() => {}}
          />
        ))}
        <View style={styles.btnWrap}>
          <Button
            text="Add New Card"
            onPress={() => navigation.navigate(ROUTES.ADD_CARD)}
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
  btnWrap: {
    marginTop: 16,
  },
  btn: {
    borderRadius: 30,
  },
});

export default PaymentMethods;
