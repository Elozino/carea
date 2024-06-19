import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Appearance, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootStackNavigator from './src/navigators/RootStackNavigator';
import useCareaTheme from './src/hooks/useCareaTheme';

const App = () => {
  const theme = useCareaTheme();
  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          barStyle={
            Appearance.getColorScheme() === 'light'
              ? 'dark-content'
              : 'light-content'
          }
          backgroundColor={theme.bg_1}
        />
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
};

export default App;
