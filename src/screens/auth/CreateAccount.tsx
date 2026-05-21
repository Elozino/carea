import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ArrowLeftIcon,
  AvatarIcon,
  EmailIcon,
  PadlockIcon,
  TelephoneIcon,
} from '../../assets/svg';
import {AppTextInput} from '../../components';
import SafeInset from '../../components/layout/SafeInset';
import {Button} from '../../components/ui/Button';
import {ROUTES} from '../../constants/enums';
import {getFontSize, paddingSizes} from '../../constants/styles';
import useCareaTheme from '../../hooks/useCareaTheme';
import {
  sanitizeSignupPayload,
  useSignupMutation,
  validateEmail,
  validateName,
  validatePasswordForSignup,
  validatePhone,
  validateSignupForm,
} from '../../modules/auth';
import {getApiErrorMessage} from '../../types/api';
import {AuthStackParams} from '../../types/navigation';

const CreateAccount = () => {
  const theme = useCareaTheme();
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<AuthStackParams>>();
  const themedStyles = createThemedStyles(theme);
  const iconProps = createIconProps(theme);
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [formError, setFormError] = React.useState<string | null>(null);

  const signupMutation = useSignupMutation({
    onSuccess: () => {
      navigate(ROUTES.PROFILE_FORM);
    },
  });

  const updateField = (field: keyof typeof form) => (value: string) => {
    setForm(current => ({...current, [field]: value}));
  };

  const firstNameError = validateName('First name', form.firstName);
  const lastNameError = validateName('Last name', form.lastName);
  const emailError = validateEmail(form.email);
  const phoneError = validatePhone(form.phone);
  const passwordError = validatePasswordForSignup(form.password);
  const hasRequiredFields =
    !firstNameError &&
    !lastNameError &&
    !emailError &&
    !phoneError &&
    !passwordError;

  const errorMessage = React.useMemo(() => {
    if (formError) {
      return formError;
    }

    const {error} = signupMutation;
    if (!error) {
      return null;
    }

    return getApiErrorMessage(
      error,
      'Unable to create your account right now. Please try again.',
    );
  }, [formError, signupMutation]);

  const handleSignUp = () => {
    setFormError(null);

    const validationErrors = validateSignupForm(form);
    if (validationErrors.length > 0) {
      setFormError(validationErrors[0]);
      return;
    }

    signupMutation.mutate(sanitizeSignupPayload(form));
  };

  const handleBack = React.useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <SafeInset
      style={themedStyles.wrapper}
      header={{
        leftIcon: <ArrowLeftIcon fill={theme.text_1} width={24} height={24} />,
        onLeftPress: handleBack,
      }}>
      <KeyboardAvoidingView
        style={styles.keyboardAwareWrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        // keyboardVerticalOffset={Platform.OS === 'ios' ? insets.top : 0}
      >
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode={
            Platform.OS === 'ios' ? 'interactive' : 'on-drag'
          }
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.content}>
            <View style={styles.imageWrapper}>
              <Image
                source={require('../../assets/images/car.png')}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <Text style={[styles.title, themedStyles.title]}>
              Create Your Account
            </Text>
            <View style={styles.formWrapper}>
              <AppTextInput
                placeholder="First Name"
                leftIcon={<AvatarIcon {...iconProps.avatar} />}
                value={form.firstName}
                onChangeText={updateField('firstName')}
                autoCapitalize="words"
                textContentType="givenName"
                returnKeyType="next"
              />
              <AppTextInput
                placeholder="Last Name"
                leftIcon={<AvatarIcon {...iconProps.avatar} />}
                value={form.lastName}
                onChangeText={updateField('lastName')}
                autoCapitalize="words"
                textContentType="familyName"
                returnKeyType="next"
              />
              <AppTextInput
                placeholder="Email"
                leftIcon={<EmailIcon />}
                value={form.email}
                onChangeText={updateField('email')}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="emailAddress"
                returnKeyType="next"
              />
              <AppTextInput
                placeholder="Phone Number"
                leftIcon={<TelephoneIcon {...iconProps.phone} />}
                value={form.phone}
                onChangeText={updateField('phone')}
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
                returnKeyType="next"
              />
              <AppTextInput
                placeholder="Password"
                leftIcon={<PadlockIcon />}
                value={form.password}
                onChangeText={updateField('password')}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                returnKeyType="done"
              />
              <View style={styles.formSpacing} />
              {errorMessage ? (
                <Text
                  style={[
                    styles.errorText,
                    {color: theme.navigation.notification},
                  ]}>
                  {errorMessage}
                </Text>
              ) : null}
              <Button
                text={
                  signupMutation.isPending ? 'Creating account...' : 'Sign up'
                }
                onPress={handleSignUp}
                loading={signupMutation.isPending}
                disabled={!hasRequiredFields}
              />
            </View>
            <View style={styles.accWrapper}>
              <Text style={themedStyles.accountText}>
                Do you have an account?{' '}
              </Text>
              <Pressable onPress={() => navigate(ROUTES.LOGIN)}>
                <Text style={[styles.signInText, themedStyles.signInText]}>
                  Sign in
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeInset>
  );
};

export default CreateAccount;

const createThemedStyles = (theme: ReturnType<typeof useCareaTheme>) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.bg_1,
    },
    title: {
      color: theme.text_1,
    },
    accountText: {
      color: theme.text_1,
    },
    signInText: {
      color: theme.text_1,
    },
  });

const createIconProps = (theme: ReturnType<typeof useCareaTheme>) => ({
  avatar: {
    fill: theme.btn_bg,
  },
  phone: {
    fill: theme.btn_bg,
    width: 20,
    height: 20,
  },
});

const styles = StyleSheet.create({
  keyboardAwareWrapper: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    paddingHorizontal: paddingSizes.medium,
    justifyContent: 'center',
    flex: 1,
    paddingBottom: paddingSizes.large,
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
  formSpacing: {
    marginTop: paddingSizes.small,
  },
  errorText: {
    marginBottom: paddingSizes.small,
  },
  accWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: paddingSizes.medium,
  },
  signInText: {
    fontWeight: '900',
  },
});
