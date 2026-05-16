/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from 'expo-blur';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {
  AvatarIcon,
  ChatIcon,
  HomeIcon,
  OrderIcon,
  WalletIcon,
} from '../assets/svg';
import {
  borderWidths,
  componentSizes,
  paddingSizes,
  radiusSizes,
  shadowPresets,
  widthAndHeight,
} from '../constants/styles';
import {ROUTES} from '../constants/enums';
import useCareaTheme from '../hooks/useCareaTheme';
import HomeStackNavigator from './HomeStackNavigator';
import OrdersStackNavigator from './OrdersStackNavigator';
import InboxStackNavigator from './InboxStackNavigator';
import WalletStackNavigator from './WalletStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

const Tab = createBottomTabNavigator();

const TabBG = () => {
  const theme = useCareaTheme();

  return (
    <>
      <BlurView
        tint={theme.glass.blurTint}
        intensity={theme.glass.blurIntensity.strong}
        style={StyleSheet.absoluteFill}
      />
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          styles.tabBarMembrane,
          {
            backgroundColor: theme.glass.background.medium,
            borderTopColor: theme.glass.border.subtle,
          },
        ]}
      />
      <View
        pointerEvents="none"
        style={[
          styles.tabBarHighlight,
          {backgroundColor: theme.glass.highlight.soft},
        ]}
      />
    </>
  );
};

const BottomNavigator = () => {
  const theme = useCareaTheme();
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.HOME}
      // backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          height:
            Platform.OS === 'ios'
              ? widthAndHeight.tabBarIos
              : widthAndHeight.tabBarAndroid,
          borderTopWidth: 0,
          borderTopLeftRadius: radiusSizes.xLarge,
          borderTopRightRadius: radiusSizes.xLarge,
          shadowColor: theme.shadowColor,
          ...shadowPresets.medium,
        },
        tabBarActiveTintColor: theme.navigation.primary,
        tabBarBackground: TabBG,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              fill={focused ? theme.navigation.primary : theme.text.tertiary}
              width={componentSizes.iconXLarge}
              height={componentSizes.iconXLarge}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <OrderIcon
              fill={focused ? theme.navigation.primary : theme.text.tertiary}
              width={componentSizes.iconXLarge}
              height={componentSizes.iconXLarge}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <ChatIcon
              fill={focused ? theme.navigation.primary : theme.text.tertiary}
              width={componentSizes.iconXLarge}
              height={componentSizes.iconXLarge}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <WalletIcon
              fill={focused ? theme.navigation.primary : theme.text.tertiary}
              width={componentSizes.iconXLarge}
              height={componentSizes.iconXLarge}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
            <AvatarIcon
              fill={focused ? theme.navigation.primary : theme.text.tertiary}
              width={componentSizes.iconXXLarge}
              height={componentSizes.iconXXLarge}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  tabBarMembrane: {
    borderTopWidth: borderWidths.thin,
  },
  tabBarHighlight: {
    position: 'absolute',
    top: 0,
    left: paddingSizes.medium,
    right: paddingSizes.medium,
    height: borderWidths.thin,
    borderRadius: borderWidths.thin,
  },
});
