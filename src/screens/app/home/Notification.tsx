import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Topbar from '../../../components/Topbar';
import {ArrowLeftIcon} from '../../../assets/svg';
import {globalStyle} from '../../../constants/styles';
import useCareaTheme from '../../../hooks/useCareaTheme';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const theme = useCareaTheme();
  const {goBack} = useNavigation();
  return (
    <View style={[globalStyle.container, {backgroundColor: theme.bg_1}]}>
      <Topbar
        text={'Notification'}
        leftIcon={<ArrowLeftIcon fill={theme.btn_bg} />}
        leftIconAction={goBack}
      />
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
