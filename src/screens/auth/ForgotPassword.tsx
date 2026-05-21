import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {AppTextInput} from '../../components';
import SafeInset from '../../components/layout/SafeInset';
import {Button} from '../../components/ui/Button';
import {ArrowLeftIcon, EmailIcon} from '../../assets/svg';
import {ROUTES} from '../../constants/enums';
import {getFontSize, paddingSizes, textSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';
import {useForgotPasswordMutation, validateEmail} from '../../modules/auth';
import {getApiErrorMessage} from '../../types/api';
import {AuthStackParams} from '../../types/navigation';

const ForgotPassword = () => {
  const theme = useCareaTheme();
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const [email, setEmail] = React.useState('');
  const [requestSuccess, setRequestSuccess] = React.useState<string | null>(
    null,
  );
  const [formError, setFormError] = React.useState<string | null>(null);

  const forgotPasswordMutation = useForgotPasswordMutation({
    onSuccess: response => {
      const normalizedEmail = email.trim().toLowerCase();
      setRequestSuccess(response.message || 'Reset code sent to your email.');
      setFormError(null);
      navigate(ROUTES.RESET_PASSWORD, {email: normalizedEmail});
    },
  });

  const emailError = validateEmail(email);

  const requestErrorMessage = React.useMemo(() => {
    if (formError) {
      return formError;
    }

    const err = forgotPasswordMutation.error;
    if (!err) {
      return null;
    }

    return getApiErrorMessage(
      err,
      'Unable to send reset code. Please try again.',
    );
  }, [formError, forgotPasswordMutation.error]);

  const handleRequestCode = () => {
    setRequestSuccess(null);
    setFormError(null);

    if (emailError) {
      setFormError(emailError);
      return;
    }

    forgotPasswordMutation.mutate({email: email.trim().toLowerCase()});
  };

  const handleBack = React.useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <SafeInset
      style={styles.wrapper}
      header={{
        leftIcon: <ArrowLeftIcon fill={theme.text_1} width={24} height={24} />,
        onLeftPress: handleBack,
      }}>
      <Text style={[styles.title, {color: theme.text_1}]}>Forgot Password</Text>
      <Text style={[styles.subtitle, {color: theme.text.secondary}]}>
        Enter your email to receive your reset verification code.
      </Text>

      <View style={styles.formWrapper}>
        <AppTextInput
          placeholder="Email"
          leftIcon={<EmailIcon />}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          returnKeyType="done"
        />

        {requestErrorMessage ? (
          <Text
            style={[styles.errorText, {color: theme.navigation.notification}]}>
            {requestErrorMessage}
          </Text>
        ) : null}

        {requestSuccess ? (
          <Text
            style={[
              styles.successText,
              {color: theme.action.primaryBackground},
            ]}>
            {requestSuccess}
          </Text>
        ) : null}

        <Button
          text={
            forgotPasswordMutation.isPending
              ? 'Sending code...'
              : 'Request reset code'
          }
          onPress={handleRequestCode}
          loading={forgotPasswordMutation.isPending}
          disabled={Boolean(emailError)}
        />

        <Pressable
          style={styles.backToLogin}
          onPress={() => navigate(ROUTES.LOGIN)}>
          <Text style={[styles.backToLoginText, {color: theme.text_1}]}>
            Back to Login
          </Text>
        </Pressable>
      </View>
    </SafeInset>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: paddingSizes.medium,
  },
  title: {
    textAlign: 'center',
    fontSize: getFontSize(30),
    fontWeight: '600',
  },
  subtitle: {
    marginTop: paddingSizes.small,
    textAlign: 'center',
    fontSize: textSizes.base,
    marginBottom: paddingSizes.large,
  },
  formWrapper: {
    gap: 12,
  },
  errorText: {
    fontSize: getFontSize(12),
  },
  successText: {
    fontSize: textSizes.small,
    fontWeight: '500',
  },
  backToLogin: {
    marginTop: paddingSizes.small,
    alignItems: 'center',
  },
  backToLoginText: {
    fontSize: textSizes.base,
    fontWeight: '700',
  },
});
