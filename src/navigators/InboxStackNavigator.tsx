import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Call, Inbox} from '../screens';
import {ROUTES} from '../constants/enums';

const Stack = createNativeStackNavigator();
const InboxStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME} component={Inbox} />
      <Stack.Screen name={ROUTES.CALL} component={Call} />
    </Stack.Navigator>
  );
};

export default InboxStackNavigator;
