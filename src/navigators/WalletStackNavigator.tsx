import React from 'react';
import {ROUTES} from '../constants/enums';
import {Wallet} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const WalletStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.WALLET} component={Wallet} />
    </Stack.Navigator>
  );
};

export default WalletStackNavigator;
