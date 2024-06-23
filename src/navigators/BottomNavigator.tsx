/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurTint, BlurView} from 'expo-blur';
import React from 'react';
import {Appearance, Platform, StyleSheet} from 'react-native';
import {
  AvatarIcon,
  ChatIcon,
  HomeIcon,
  OrderIcon,
  WalletIcon,
} from '../assets/svg';
import {ROUTES} from '../constants/enums';
import useCareaTheme from '../hooks/useCareaTheme';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

type Blur = BlurTint | 'dark' | 'light';

const TabBG = () => (
  <BlurView
    tint={Appearance.getColorScheme() as Blur}
    intensity={100}
    style={StyleSheet.absoluteFill}
  />
);

const BottomNavigator = () => {
  const theme = useCareaTheme();
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          shadowOffset: {
            height: 0,
            width: 0,
          },
          shadowOpacity: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 100 : 70,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: theme.btn_bg,
        tabBarBackground: TabBG,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              fill={focused ? theme.btn_bg : 'gray'}
              width={30}
              height={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <OrderIcon
              fill={focused ? theme.btn_bg : 'gray'}
              width={30}
              height={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <ChatIcon
              fill={focused ? theme.btn_bg : 'gray'}
              width={30}
              height={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <WalletIcon
              fill={focused ? theme.btn_bg : 'gray'}
              width={30}
              height={30}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <AvatarIcon
              fill={focused ? theme.btn_bg : 'gray'}
              width={40}
              height={40}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    position: 'absolute',
    // bottom: 25,
    // marginHorizontal: 16,
    // borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#dadada',
  },
});
