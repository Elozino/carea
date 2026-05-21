import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
  useQueryClient,
} from '@tanstack/react-query';
import {authApi, authQueryKeys} from './api';
import {
  AuthResult,
  AuthTokens,
  AuthenticatedUser,
  ChangePasswordInput,
  ForgotPasswordInput,
  LoginInput,
  RefreshTokenInput,
  ResetPasswordInput,
  SignupInput,
  SuccessMessageResponse,
} from './types';

export function useCurrentUserQuery(
  options?: Omit<
    UseQueryOptions<
      AuthenticatedUser,
      Error,
      AuthenticatedUser,
      readonly string[]
    >,
    'queryKey' | 'queryFn'
  >,
) {
  return useQuery({
    queryKey: authQueryKeys.me,
    queryFn: authApi.me,
    ...options,
  });
}

export function useSignupMutation(
  options?: UseMutationOptions<AuthResult, Error, SignupInput>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.signup,
    onSuccess: async (...args) => {
      await queryClient.invalidateQueries({queryKey: authQueryKeys.me});
      await options?.onSuccess?.(...args);
    },
    ...options,
  });
}

export function useLoginMutation(
  options?: UseMutationOptions<AuthResult, Error, LoginInput>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: async (...args) => {
      await queryClient.invalidateQueries({queryKey: authQueryKeys.me});
      await options?.onSuccess?.(...args);
    },
    ...options,
  });
}

export function useForgotPasswordMutation(
  options?: UseMutationOptions<
    SuccessMessageResponse,
    Error,
    ForgotPasswordInput
  >,
) {
  return useMutation({
    mutationFn: authApi.forgotPassword,
    ...options,
  });
}

export function useResetPasswordMutation(
  options?: UseMutationOptions<
    SuccessMessageResponse,
    Error,
    ResetPasswordInput
  >,
) {
  return useMutation({
    mutationFn: authApi.resetPassword,
    ...options,
  });
}

export function useRefreshTokenMutation(
  options?: UseMutationOptions<
    AuthTokens,
    Error,
    RefreshTokenInput | undefined
  >,
) {
  return useMutation({
    mutationFn: authApi.refresh,
    ...options,
  });
}

export function useChangePasswordMutation(
  options?: UseMutationOptions<
    SuccessMessageResponse,
    Error,
    ChangePasswordInput
  >,
) {
  return useMutation({
    mutationFn: authApi.changePassword,
    ...options,
  });
}

export function useLogoutMutation(
  options?: UseMutationOptions<SuccessMessageResponse, Error, void>,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.logout,
    onSuccess: async (...args) => {
      await queryClient.removeQueries({queryKey: authQueryKeys.me});
      await options?.onSuccess?.(...args);
    },
    ...options,
  });
}
