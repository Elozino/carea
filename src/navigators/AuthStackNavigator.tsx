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
import BottomNavigator from './BottomNavigator';
import {ROUTES} from '../constants/enums';
import {
  ZegoUIKitPrebuiltCallInCallScreen,
  ZegoUIKitPrebuiltCallWaitingScreen,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.WELCOME} component={Welcome} />
      <Stack.Screen name={ROUTES.GET_STARTED} component={GetStarted} />
      <Stack.Screen name={ROUTES.AUTH} component={Auth} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.CREATE_ACCOUNT} component={CreateAccount} />
      <Stack.Screen name={ROUTES.PROFILE_FORM} component={ProfileForm} />
      <Stack.Screen name={ROUTES.APP} component={BottomNavigator} />
      <Stack.Screen
        // DO NOT change the name
        name="ZegoUIKitPrebuiltCallWaitingScreen"
        component={ZegoUIKitPrebuiltCallWaitingScreen}
      />
      <Stack.Screen
        // DO NOT change the name
        name="ZegoUIKitPrebuiltCallInCallScreen"
        component={ZegoUIKitPrebuiltCallInCallScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
