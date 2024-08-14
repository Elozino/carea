import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {AppTextInput} from '../../components';
import {Button} from '../../components/ui/Button';
import {getFontSize, paddingSizes, textSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';
import {
  AppleIcon,
  EmailIcon,
  FacebookIcon,
  GoogleIcon,
  PadlockIcon,
} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../types/navigation';
import {ROUTES} from '../../constants/enums';
import SafeInset from '../../components/layout/SafeInset';

const Login = () => {
  const theme = useCareaTheme();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  return (
    <SafeInset style={styles.wrapper}>
      <View style={[styles.imageWrapper]}>
        <Image
          source={require('../../assets/images/car.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <Text style={[styles.title, {color: theme.text_1}]}>
        Login Your Account
      </Text>
      <View style={[styles.formWrapper]}>
        <AppTextInput placeholder="Email" leftIcon={<EmailIcon />} />
        <AppTextInput placeholder="Password" leftIcon={<PadlockIcon />} />
        <View style={{marginTop: paddingSizes.small}} />
        <Button
          text={'Sign in'}
          textStyle={{fontSize: textSizes.base}}
          onPress={() => navigate(ROUTES.PROFILE_FORM)}
        />
      </View>
      <View style={[styles.divider]}>
        <View style={[styles.lineRule, {backgroundColor: theme.text_1}]} />
        <Text style={{color: theme.text_1}}>or continue with</Text>
        <View style={[styles.lineRule, {backgroundColor: theme.text_1}]} />
      </View>
      <View style={[styles.socials]}>
        <Button
          icon={<GoogleIcon />}
          style={{...styles.socialsBtn, backgroundColor: theme.btn_bg1}}
        />
        <Button
          icon={<FacebookIcon />}
          style={{...styles.socialsBtn, backgroundColor: theme.btn_bg1}}
        />
        <Button
          icon={<AppleIcon fill={theme.btn_bg} />}
          style={{...styles.socialsBtn, backgroundColor: theme.btn_bg1}}
        />
      </View>
      <View style={[styles.accWrapper]}>
        <Text style={[{color: theme.text_1}]}>Don't have an account? </Text>
        <Pressable onPress={() => navigate(ROUTES.CREATE_ACCOUNT)}>
          <Text style={{color: theme.text_1, fontWeight: '900'}}>Sign up</Text>
        </Pressable>
      </View>
    </SafeInset>
  );
};

export default Login;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: paddingSizes.medium,
    justifyContent: 'center',
    flex: 1,
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 180,
  },
  title: {
    textAlign: 'center',
    fontSize: getFontSize(32),
    fontWeight: '600',
    marginVertical: paddingSizes.medium,
  },
  formWrapper: {
    gap: 12,
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    marginTop: paddingSizes.xLarge,
  },
  lineRule: {
    height: 0.5,
    width: '30%',
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: paddingSizes.large,
  },
  socialsBtn: {
    width: '25%',
    borderRadius: 15,
  },
  accWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: paddingSizes.medium,
  },
});
