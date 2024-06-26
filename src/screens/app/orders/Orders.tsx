import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';

const Orders = () => {
  const theme = useCareaTheme();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
      <Text>Orders</Text>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
