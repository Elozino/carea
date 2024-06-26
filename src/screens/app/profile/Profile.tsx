import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {globalStyle} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';

const Profile = () => {
  const theme = useCareaTheme();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
