import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {ZegoCallInvitationDialog} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import React from 'react';
import {Appearance, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {globalStyle} from './src/constants/styles';
import useCareaTheme from './src/hooks/useCareaTheme';
import linking from './src/navigators/linking';
import RootStackNavigator from './src/navigators/RootStackNavigator';

const App = () => {
  const theme = useCareaTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.bg_1,
    },
  };
  return (
    <>
      <GestureHandlerRootView style={globalStyle.container}>
        <SafeAreaProvider>
          <StatusBar
            barStyle={
              Appearance.getColorScheme() === 'light'
                ? 'dark-content'
                : 'light-content'
            }
            backgroundColor={theme.bg_1}
          />
          <NavigationContainer linking={linking} theme={MyTheme}>
            <ZegoCallInvitationDialog />
            <RootStackNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default App;
