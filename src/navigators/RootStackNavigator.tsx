import React from 'react';
import {StyleSheet} from 'react-native';
import AuthStackNavigator from './AuthStackNavigator';
import BottomNavigator from './BottomNavigator';

const RootStackNavigator = () => {
  return <BottomNavigator />;
};

export default RootStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
