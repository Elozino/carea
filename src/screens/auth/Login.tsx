/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {AppTextInput} from '../../components';
import {Button} from '../../components/ui/Button';
import {getFontSize, paddingSizes, textSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';
import {
  AppleIcon,
  ArrowLeftIcon,
  EmailIcon,
  EyeOffIcon,
  EyeOpenIcon,
  FacebookIcon,
  GoogleIcon,
  PadlockIcon,
} from '../../assets/svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParams} from '../../types/navigation';
import {ROUTES} from '../../constants/enums';
import SafeInset from '../../components/layout/SafeInset';
import {
  sanitizeLoginPayload,
  useLoginMutation,
  validateEmail,
  validatePasswordForLogin,
} from '../../modules/auth';
import {getApiErrorMessage} from '../../types/api';

const Login = () => {
  const theme = useCareaTheme();
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const handleBack = React.useCallback(() => {
    goBack();
  }, [goBack]);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);

  const loginMutation = useLoginMutation({
    onSuccess: () => {
      navigate(ROUTES.APP);
    },
  });

  const emailError = validateEmail(email);
  const passwordError = validatePasswordForLogin(password);
  const isFormValid = !emailError && !passwordError;

  const errorMessage = React.useMemo(() => {
    if (formError) {
      return formError;
    }

    const {error} = loginMutation;
    if (!error) {
      return null;
    }

    return getApiErrorMessage(
      error,
      'Unable to sign in right now. Please try again.',
    );
  }, [formError, loginMutation]);

  const handleSignIn = () => {
    setFormError(null);

    if (emailError) {
      setFormError(emailError);
      return;
    }

    if (passwordError) {
      setFormError(passwordError);
      return;
    }

    loginMutation.mutate(sanitizeLoginPayload({email, password}));
  };

  return (
    <SafeInset
      style={styles.wrapper}
      header={{
        leftIcon: <ArrowLeftIcon fill={theme.text_1} width={24} height={24} />,
        onLeftPress: handleBack,
      }}>
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
        <AppTextInput
          placeholder="Email"
          leftIcon={<EmailIcon />}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          returnKeyType="next"
        />
        <AppTextInput
          placeholder="Password"
          leftIcon={<PadlockIcon />}
          rightIcon={
            <Pressable
              onPress={() => setIsPasswordVisible(current => !current)}
              hitSlop={8}>
              {isPasswordVisible ? (
                <EyeOffIcon fill={theme.text_1} />
              ) : (
                <EyeOpenIcon fill={theme.text_1} />
              )}
            </Pressable>
          }
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          returnKeyType="done"
        />
        <Pressable onPress={() => navigate(ROUTES.FORGOT_PASSWORD)}>
          <Text style={[styles.forgotPasswordText, {color: theme.text_1}]}>
            Forgot password?
          </Text>
        </Pressable>
        {errorMessage ? (
          <Text
            style={[styles.errorText, {color: theme.navigation.notification}]}>
            {errorMessage}
          </Text>
        ) : null}
        <View style={{marginTop: paddingSizes.small}} />
        <Button
          text={loginMutation.isPending ? 'Signing in...' : 'Sign in'}
          textStyle={{fontSize: textSizes.base}}
          onPress={handleSignIn}
          loading={loginMutation.isPending}
          disabled={!isFormValid}
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
  errorText: {
    fontSize: textSizes.base,
    marginTop: 4,
  },
  forgotPasswordText: {
    textAlign: 'right',
    fontSize: textSizes.base,
    fontWeight: '500',
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
