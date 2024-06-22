/* eslint-disable react-native/no-inline-styles */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components/ui/Button';
import {paddingSizes, textSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';
import {AppleIcon, FacebookIcon, GoogleIcon} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';

const Auth = () => {
  const theme = useCareaTheme();
  const {navigate} = useNavigation();
  return (
    <View style={[styles.wrapper, {backgroundColor: theme.bg_1}]}>
      <View style={[styles.authWrapper]}>
        <View style={[styles.imageWrapper]}>
          <Image
            source={require('../../assets/images/car.png')}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Text style={[styles.title, {color: theme.text_1}]}>Let's you in</Text>
        <View style={[styles.socialsWrapper]}>
          <Button
            icon={<GoogleIcon />}
            text={'Continue with Google'}
            style={{
              ...styles.socials,
              backgroundColor: theme.btn_bg1,
              borderColor: theme.btn_bg,
            }}
            textStyle={{color: theme.text_1, fontSize: textSizes.base}}
          />
          <Button
            icon={<FacebookIcon />}
            text={'Continue with Facebook'}
            style={{
              ...styles.socials,
              backgroundColor: theme.btn_bg1,
              borderColor: theme.btn_bg,
            }}
            textStyle={{color: theme.text_1, fontSize: textSizes.base}}
          />
          <Button
            icon={<AppleIcon />}
            text={'Continue with Apple'}
            style={{
              ...styles.socials,
              backgroundColor: theme.btn_bg1,
              borderColor: theme.btn_bg,
            }}
            textStyle={{color: theme.text_1, fontSize: textSizes.base}}
          />
        </View>
        <View style={[styles.divider]}>
          <View style={[styles.lineRule, {backgroundColor: theme.text_1}]} />
          <Text style={{color: theme.text_1}}>or</Text>
          <View style={[styles.lineRule, {backgroundColor: theme.text_1}]} />
        </View>
        <Button
          text={'Sign in with password'}
          textStyle={{fontSize: textSizes.base}}
          onPress={() => navigate('Login')}
        />
        <View style={[styles.accWrapper]}>
          <Text style={[styles.accText, {color: theme.text_1}]}>
            Don't have an account?{' '}
          </Text>
          <Pressable onPress={() => navigate('CreateAccount')}>
            <Text style={{color: theme.text_1, fontWeight: '900'}}>
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Auth;

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
  authWrapper: {
    gap: 15,
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: textSizes.large,
    fontWeight: '500',
    marginVertical: paddingSizes.medium,
  },
  socialsWrapper: {
    gap: 15,
  },
  socials: {
    borderRadius: 10,
    borderWidth: 0.3,
  },
  divider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    marginVertical: paddingSizes.medium,
  },
  lineRule: {
    height: 0.5,
    width: '40%',
  },
  accWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: paddingSizes.medium,
  },
  accText: {
    textAlign: 'center',
    fontSize: textSizes.base,
    fontWeight: '500',
  },
});
