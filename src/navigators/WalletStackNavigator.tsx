import React from 'react';
import {ROUTES} from '../constants/enums';
import {Wallet} from '../screens';
import WalletTopUpAmount from '../screens/app/wallet/WalletTopUpAmount';
import WalletTopUpMethod from '../screens/app/wallet/WalletTopUpMethod';
import WalletTopUpPin from '../screens/app/wallet/WalletTopUpPin';
import WalletTopUpSuccess from '../screens/app/wallet/WalletTopUpSuccess';
import WalletTransactionHistory from '../screens/app/wallet/WalletTransactionHistory';
import WalletEReceipt from '../screens/app/wallet/WalletEReceipt';
import AddCard from '../screens/app/profile/AddCard';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WalletStackParams} from '../types/navigation';

const Stack = createNativeStackNavigator<WalletStackParams>();

const WalletStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.WALLET} component={Wallet} />
      <Stack.Screen
        name={ROUTES.WALLET_TOP_UP_AMOUNT}
        component={WalletTopUpAmount}
      />
      <Stack.Screen
        name={ROUTES.WALLET_TOP_UP_METHOD}
        component={WalletTopUpMethod}
      />
      <Stack.Screen
        name={ROUTES.WALLET_TOP_UP_PIN}
        component={WalletTopUpPin}
      />
      <Stack.Screen
        name={ROUTES.WALLET_TOP_UP_SUCCESS}
        component={WalletTopUpSuccess}
      />
      <Stack.Screen
        name={ROUTES.WALLET_TRANSACTIONS}
        component={WalletTransactionHistory}
      />
      <Stack.Screen name={ROUTES.WALLET_RECEIPT} component={WalletEReceipt} />
      <Stack.Screen name={ROUTES.ADD_CARD} component={AddCard} />
    </Stack.Navigator>
  );
};

export default WalletStackNavigator;
