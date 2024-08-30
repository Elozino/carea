import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from '../constants/enums';
import {Orders, TrackOrder} from '../screens';

const Stack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.ORDERS} component={Orders} />
      <Stack.Screen name={ROUTES.TRACK_ORDER} component={TrackOrder} />
    </Stack.Navigator>
  );
};

export default OrdersStackNavigator;
