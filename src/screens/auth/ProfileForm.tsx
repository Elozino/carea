/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {KeyboardAvoidingView, ScrollView, StyleSheet, View} from 'react-native';
import {
  ArrowLeftIcon,
  AvatarIcon,
  CalendarIcon,
  EditIcon,
  EmailIcon,
} from '../../assets/svg';
import {AppTextInput} from '../../components';
import SafeInset from '../../components/layout/SafeInset';
import {Button} from '../../components/ui/Button';
import {ROUTES} from '../../constants/enums';
import {globalStyle, paddingSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';
import {AuthStackParams} from '../../types/navigation';

const ProfileForm = () => {
  const theme = useCareaTheme();
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const handleBack = React.useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <SafeInset
      header={{
        title: 'Profile',
        leftIcon: <ArrowLeftIcon fill={theme.text_1} width={24} height={24} />,
        onLeftPress: handleBack,
      }}>
      <ScrollView>
        <KeyboardAvoidingView
          style={[
            globalStyle.container,
            styles.wrapper,
            {backgroundColor: theme.bg_1},
          ]}>
          <View style={styles.avatarWrapper}>
            <View style={{position: 'relative'}}>
              <AvatarIcon width={200} height={200} fill={theme?.btn_bg} />
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
          <View style={{marginTop: Number(paddingSizes.medium) * 2}} />
          <Button text="Continue" onPress={() => navigate(ROUTES.APP)} />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeInset>
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
