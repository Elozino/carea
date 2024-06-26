import React from 'react';
import {View} from 'react-native';
import BottomNavigator from './BottomNavigator';
import useCareaTheme from '../hooks/useCareaTheme';
import {globalStyle} from '../constants/styles';

const RootStackNavigator = () => {
  const theme = useCareaTheme();
  return (
    <View style={{backgroundColor: theme.bg_1, ...globalStyle.container}}>
      <BottomNavigator />
    </View>
  );
};

export default RootStackNavigator;
