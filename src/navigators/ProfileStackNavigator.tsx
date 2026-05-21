import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Profile} from '../screens';
import EditProfile from '../screens/app/profile/EditProfile';
import AddressList from '../screens/app/profile/AddressList';
import AddAddress from '../screens/app/profile/AddAddress';
import NotificationSettings from '../screens/app/profile/NotificationSettings';
import PaymentMethods from '../screens/app/profile/PaymentMethods';
import AddCard from '../screens/app/profile/AddCard';
import SecuritySettings from '../screens/app/profile/SecuritySettings';
import LanguageSettings from '../screens/app/profile/LanguageSettings';
import PrivacyPolicy from '../screens/app/profile/PrivacyPolicy';
import InviteFriends from '../screens/app/profile/InviteFriends';
import HelpCenter from '../screens/app/profile/HelpCenter';
import HelpCenterChannels from '../screens/app/profile/HelpCenterChannels';
import CustomerServiceChat from '../screens/app/profile/CustomerServiceChat';
import {ROUTES} from '../constants/enums';
import {ProfileStackParams} from '../types/navigation';

const Stack = createNativeStackNavigator<ProfileStackParams>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
      <Stack.Screen name={ROUTES.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={ROUTES.ADDRESS_LIST} component={AddressList} />
      <Stack.Screen name={ROUTES.ADD_ADDRESS} component={AddAddress} />
      <Stack.Screen
        name={ROUTES.NOTIFICATION_SETTINGS}
        component={NotificationSettings}
      />
      <Stack.Screen name={ROUTES.PAYMENT_METHODS} component={PaymentMethods} />
      <Stack.Screen name={ROUTES.ADD_CARD} component={AddCard} />
      <Stack.Screen
        name={ROUTES.SECURITY_SETTINGS}
        component={SecuritySettings}
      />
      <Stack.Screen
        name={ROUTES.LANGUAGE_SETTINGS}
        component={LanguageSettings}
      />
      <Stack.Screen name={ROUTES.PRIVACY_POLICY} component={PrivacyPolicy} />
      <Stack.Screen name={ROUTES.INVITE_FRIENDS} component={InviteFriends} />
      <Stack.Screen name={ROUTES.HELP_CENTER} component={HelpCenter} />
      <Stack.Screen
        name={ROUTES.HELP_CENTER_CHANNELS}
        component={HelpCenterChannels}
      />
      <Stack.Screen
        name={ROUTES.CUSTOMER_SERVICE_CHAT}
        component={CustomerServiceChat}
      />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
