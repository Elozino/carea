import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import SafeInset from '../../../components/layout/SafeInset';
import Topbar from '../../../components/Topbar';
import PinDots from '../../../components/ui/PinDots';
import NumericKeypad from '../../../components/ui/NumericKeypad';
import {Button} from '../../../components/ui/Button';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {ArrowLeftIcon} from '../../../assets/svg';
import useHideBottomBar from '../../../hooks/useHideBottomTab';
import {ROUTES} from '../../../constants/enums';
import {WalletStackParams} from '../../../types/navigation';

type Nav = NativeStackNavigationProp<WalletStackParams>;
type Route = RouteProp<WalletStackParams, 'WALLET_TOP_UP_PIN'>;

const WalletTopUpPin = () => {
  useHideBottomBar();
  const theme = useCareaTheme();
  const navigation = useNavigation<Nav>();
  const route = useRoute<Route>();
  const {amount} = route.params;

  const [pin, setPin] = useState('');

  return (
    <SafeInset>
      <Topbar
        text="Enter Your PIN"
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={() => navigation.goBack()}
      />
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled">
        <Text style={[styles.subtitle, {color: theme.text_3}]}>
          Enter your PIN to confirm this top up
        </Text>
        <PinDots length={4} filled={pin.length} />
        <NumericKeypad
          onDigitPress={d => {
            if (pin.length < 4) {
              const next = pin + d;
              setPin(next);
              if (next.length === 4) {
                navigation.navigate(ROUTES.WALLET_TOP_UP_SUCCESS, {amount});
              }
            }
          }}
          onDeletePress={() => setPin(prev => prev.slice(0, -1))}
        />
        <View style={styles.btnWrap}>
          <Button
            text="Continue"
            disabled={pin.length < 4}
            onPress={() =>
              navigation.navigate(ROUTES.WALLET_TOP_UP_SUCCESS, {amount})
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
    alignItems: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 12,
  },
  btnWrap: {
    marginTop: 24,
    width: '100%',
  },
  btn: {
    borderRadius: 30,
  },
});

export default WalletTopUpPin;
