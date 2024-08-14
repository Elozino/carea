import React from 'react';
import {StyleSheet, Text} from 'react-native';
import SafeInset from '../../../components/layout/SafeInset';
import useCareaTheme from '../../../hooks/useCareaTheme';

const Orders = () => {
  const theme = useCareaTheme();
  return (
    <SafeInset>
      <Text>Orders</Text>
    </SafeInset>
  );
};

export default Orders;

const styles = StyleSheet.create({});
