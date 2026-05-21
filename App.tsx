import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {ZegoCallInvitationDialog} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClientProvider} from '@tanstack/react-query';
import {globalStyle} from './src/constants/styles';
import useCareaTheme from './src/hooks/useCareaTheme';
import linking from './src/navigators/linking';
import RootStackNavigator from './src/navigators/RootStackNavigator';
import {queryClient} from './src/libs/queryClient';

const App = () => {
  const theme = useCareaTheme();
  const MyTheme = {
    ...DefaultTheme,
    dark: theme.isDark,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.navigation.primary,
      background: theme.navigation.background,
      card: theme.navigation.card,
      text: theme.navigation.text,
      border: theme.navigation.border,
      notification: theme.navigation.notification,
    },
  };
  return (
    <>
      <GestureHandlerRootView
        style={[
          globalStyle.container,
          {backgroundColor: theme.background.app},
        ]}>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider>
            <StatusBar
              barStyle={theme.statusBarStyle}
              backgroundColor={theme.background.app}
            />
            <NavigationContainer linking={linking} theme={MyTheme}>
              <ZegoCallInvitationDialog />
              <RootStackNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </QueryClientProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
