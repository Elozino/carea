import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {globalStyle} from '../../../constants/styles';

const Inbox = () => {
  const theme = useCareaTheme();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
      <Text>Inbox</Text>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({});
