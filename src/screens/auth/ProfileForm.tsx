/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useCareaTheme from '../../hooks/useCareaTheme';
import {Button} from '../../components/ui/Button';
import {AppTextInput} from '../../components';
import {globalStyle, paddingSizes} from '../../constants/styles';
import {
  ArrowLeftIcon,
  AvatarIcon,
  CalendarIcon,
  EditIcon,
  EmailIcon,
} from '../../assets/svg';
import Topbar from '../../components/Topbar';

const ProfileForm = () => {
  const theme = useCareaTheme();
  return (
    <View
      style={[
        globalStyle.container,
        styles.wrapper,
        {backgroundColor: theme.bg_1},
      ]}>
      <Topbar text="Profile" leftIcon={<ArrowLeftIcon width={40} />} />
      <View style={styles.avatarWrapper}>
        <View style={{position: 'relative'}}>
          <AvatarIcon width={200} height={200} />
          <View style={{position: 'absolute', right: 25, bottom: 30}}>
            <EditIcon width={30} height={30} />
          </View>
        </View>
      </View>
      <View style={[globalStyle.formWrapper]}>
        <AppTextInput placeholder="Full Name" />
        <AppTextInput placeholder="Nickname" />
        <AppTextInput
          placeholder="Date of Birth"
          rightIcon={<CalendarIcon />}
        />
        <AppTextInput placeholder="Email" rightIcon={<EmailIcon />} />
        <AppTextInput placeholder="Phone Number" />
        <AppTextInput placeholder="Gender" />
      </View>
      <View style={{marginTop: paddingSizes.medium * 2}} />
      <Button text="Continue" />
    </View>
  );
};

export default ProfileForm;

const styles = StyleSheet.create({
  wrapper: {
    padding: paddingSizes.medium,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
