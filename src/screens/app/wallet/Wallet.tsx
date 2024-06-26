import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {globalStyle} from '../../../constants/styles';

const Wallet = () => {
  const theme = useCareaTheme();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
      <Text>Wallet</Text>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
