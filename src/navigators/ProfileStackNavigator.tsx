import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile} from '../screens';
import {ROUTES} from '../constants/enums';

const Stack = createNativeStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
