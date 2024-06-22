import React from 'react';
import {StyleSheet} from 'react-native';
import AuthStackNavigator from './AuthStackNavigator';

const RootStackNavigator = () => {
  return <AuthStackNavigator />;
};

export default RootStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
