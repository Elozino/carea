import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from '../components/ui/Button';
import useCareaTheme from '../hooks/useCareaTheme';

const RootStackNavigator = () => {
  const theme = useCareaTheme();
  return (
    <View style={{backgroundColor: theme.bg_1, ...styles.container}}>
      <Button text={'Goodssss'} />
    </View>
  );
};

export default RootStackNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
