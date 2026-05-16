import React from 'react';
import {View} from 'react-native';
import {globalStyle} from '../constants/styles';
import useCareaTheme from '../hooks/useCareaTheme';
import AuthStackNavigator from './AuthStackNavigator';

const RootStackNavigator = () => {
  const theme = useCareaTheme();
  return (
    <View
      style={[globalStyle.container, {backgroundColor: theme.background.app}]}>
      <AuthStackNavigator />
    </View>
  );
};

export default RootStackNavigator;
