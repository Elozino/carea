import {LoginInput, SignupInput} from './types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_REGEX = /^[A-Za-z][A-Za-z\s'-]{1,49}$/;
const PHONE_REGEX = /^\+?[0-9]{7,15}$/;
const PASSWORD_UPPERCASE_REGEX = /[A-Z]/;
const PASSWORD_NUMBER_REGEX = /\d/;

export function validateEmail(email: string): string | null {
  if (!email.trim()) {
    return 'Email is required.';
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return 'Please enter a valid email address.';
  }

  return null;
}

export function validatePasswordForSignup(password: string): string | null {
  if (!password) {
    return 'Password is required.';
  }

  if (password.length < 8) {
    return 'Password must be at least 8 characters.';
  }

  if (!PASSWORD_UPPERCASE_REGEX.test(password)) {
    return 'Password must include at least one uppercase letter.';
  }

  if (!PASSWORD_NUMBER_REGEX.test(password)) {
    return 'Password must include at least one number.';
  }

  return null;
}

export function validatePasswordForLogin(password: string): string | null {
  if (!password.trim()) {
    return 'Password is required.';
  }

  return null;
}

export function validateName(
  label: 'First name' | 'Last name',
  value: string,
): string | null {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return `${label} is required.`;
  }

  if (!NAME_REGEX.test(trimmedValue)) {
    return `${label} must be 2-50 characters and contain only letters, spaces, apostrophes, or hyphens.`;
  }

  return null;
}

export function validatePhone(phone: string): string | null {
  const trimmedValue = phone.trim();

  if (!trimmedValue) {
    return null;
  }

  if (!PHONE_REGEX.test(trimmedValue)) {
    return 'Phone number must contain 7-15 digits and may start with +.';
  }

  return null;
}

export function validateSignupForm(input: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}): string[] {
  const errors = [
    validateName('First name', input.firstName),
    validateName('Last name', input.lastName),
    validateEmail(input.email),
    validatePasswordForSignup(input.password),
    validatePhone(input.phone),
  ].filter((message): message is string => Boolean(message));

  return errors;
}

export function sanitizeSignupPayload(input: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}): SignupInput {
  return {
    firstName: input.firstName.trim(),
    lastName: input.lastName.trim(),
    email: input.email.trim().toLowerCase(),
    password: input.password,
    phone: input.phone.trim() || undefined,
    role: 'BUYER',
  };
}

export function sanitizeLoginPayload(input: {
  email: string;
  password: string;
}): LoginInput {
  return {
    email: input.email.trim().toLowerCase(),
    password: input.password,
  };
}
