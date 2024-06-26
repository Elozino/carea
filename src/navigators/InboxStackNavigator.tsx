import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Inbox} from '../screens';
import {ROUTES} from '../constants/enums';

const Stack = createNativeStackNavigator();
const InboxStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.HOME} component={Inbox} />
    </Stack.Navigator>
  );
};

export default InboxStackNavigator;
