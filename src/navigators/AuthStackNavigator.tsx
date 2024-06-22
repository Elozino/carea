import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Auth,
  CreateAccount,
  GetStarted,
  Login,
  ProfileForm,
  Welcome,
} from '../screens';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="ProfileForm" component={ProfileForm} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
