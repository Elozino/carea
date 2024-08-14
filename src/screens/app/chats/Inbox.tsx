import React from 'react';
import {StyleSheet, Text} from 'react-native';
import SafeInset from '../../../components/layout/SafeInset';
import useCareaTheme from '../../../hooks/useCareaTheme';

const Inbox = () => {
  const theme = useCareaTheme();
  return (
    <SafeInset>
      <Text>Inbox</Text>
    </SafeInset>
  );
};

export default Inbox;

const styles = StyleSheet.create({});
