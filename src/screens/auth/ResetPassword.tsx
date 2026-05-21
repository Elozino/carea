import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {AppTextInput} from '../../components';
import SafeInset from '../../components/layout/SafeInset';
import {Button} from '../../components/ui/Button';
import {
  ArrowLeftIcon,
  EyeOffIcon,
  EyeOpenIcon,
  PadlockIcon,
} from '../../assets/svg';
import {ROUTES} from '../../constants/enums';
import {getFontSize, paddingSizes, textSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';
import {
  useResetPasswordMutation,
  validatePasswordForSignup,
} from '../../modules/auth';
import {getApiErrorMessage} from '../../types/api';
import {AuthStackParams} from '../../types/navigation';

const RESET_CODE_REGEX = /^\d{6}$/;
type ResetPasswordRoute = RouteProp<AuthStackParams, ROUTES.RESET_PASSWORD>;

const ResetPassword = () => {
  const theme = useCareaTheme();
  const route = useRoute<ResetPasswordRoute>();
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();

  const [code, setCode] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);
  const email = route.params.email.trim().toLowerCase();

  const resetPasswordMutation = useResetPasswordMutation({
    onSuccess: () => {
      setFormError(null);
      navigate(ROUTES.LOGIN);
    },
  });

  const passwordError = validatePasswordForSignup(newPassword);
  const codeError =
    code.trim().length === 0
      ? 'Reset code is required.'
      : !RESET_CODE_REGEX.test(code.trim())
      ? 'Reset code must be exactly 6 digits.'
      : null;

  const resetErrorMessage = React.useMemo(() => {
    const err = resetPasswordMutation.error;
    if (!err) {
      return null;
    }

    return getApiErrorMessage(
      err,
      'Unable to reset password. Please try again.',
    );
  }, [resetPasswordMutation.error]);

  const handleResetPassword = () => {
    setFormError(null);

    if (codeError) {
      setFormError(codeError);
      return;
    }

    if (passwordError) {
      setFormError(passwordError);
      return;
    }

    resetPasswordMutation.mutate({
      email: email.trim().toLowerCase(),
      code: code.trim(),
      newPassword,
    });
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
      <Text style={[styles.title, {color: theme.text_1}]}>Reset Password</Text>
      <Text style={[styles.subtitle, {color: theme.text.secondary}]}>
        Enter the code sent to {email} and choose a new password.
      </Text>

      <View style={styles.formWrapper}>
        <AppTextInput
          placeholder="Reset Code (6 digits)"
          leftIcon={<PadlockIcon />}
          value={code}
          onChangeText={setCode}
          keyboardType="number-pad"
          maxLength={6}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />

        <AppTextInput
          placeholder="New Password"
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
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!isPasswordVisible}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          returnKeyType="done"
        />

        {formError ? (
          <Text
            style={[styles.errorText, {color: theme.navigation.notification}]}>
            {formError}
          </Text>
        ) : null}

        {resetErrorMessage ? (
          <Text
            style={[styles.errorText, {color: theme.navigation.notification}]}>
            {resetErrorMessage}
          </Text>
        ) : null}

        <Button
          text={
            resetPasswordMutation.isPending
              ? 'Resetting password...'
              : 'Reset password'
          }
          onPress={handleResetPassword}
          loading={resetPasswordMutation.isPending}
          disabled={Boolean(codeError) || Boolean(passwordError)}
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

export default ResetPassword;

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
  backToLogin: {
    marginTop: paddingSizes.small,
    alignItems: 'center',
  },
  backToLoginText: {
    fontSize: textSizes.base,
    fontWeight: '700',
  },
});
