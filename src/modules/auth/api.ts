import EncryptedStorage from 'react-native-encrypted-storage';
import {ApiResponse} from '../../types/api';
import {apiClient, clearTokens, storeTokens} from '../../libs/apiClient';
import {authQueryKeys} from './queryKeys';
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

const REFRESH_TOKEN_KEY = 'auth_refresh_token';

export const authApi = {
  async signup(payload: SignupInput): Promise<AuthResult> {
    const response = await apiClient.post<ApiResponse<AuthResult>>(
      '/auth/signup',
      payload,
    );
    await storeTokens(
      response.data.tokens.accessToken,
      response.data.tokens.refreshToken,
    );
    return response.data;
  },

  async login(payload: LoginInput): Promise<AuthResult> {
    const response = await apiClient.post<ApiResponse<AuthResult>>(
      '/auth/login',
      payload,
    );
    await storeTokens(
      response.data.tokens.accessToken,
      response.data.tokens.refreshToken,
    );
    return response.data;
  },

  async forgotPassword(
    payload: ForgotPasswordInput,
  ): Promise<SuccessMessageResponse> {
    return apiClient.post<SuccessMessageResponse>(
      '/auth/forgot-password',
      payload,
    );
  },

  async resetPassword(
    payload: ResetPasswordInput,
  ): Promise<SuccessMessageResponse> {
    return apiClient.post<SuccessMessageResponse>(
      '/auth/reset-password',
      payload,
    );
  },

  async refresh(payload?: RefreshTokenInput): Promise<AuthTokens> {
    const refreshToken =
      payload?.refreshToken ??
      (await EncryptedStorage.getItem(REFRESH_TOKEN_KEY));

    if (!refreshToken) {
      throw new Error('Refresh token is missing. Please log in again.');
    }

    const response = await apiClient.post<ApiResponse<AuthTokens>>(
      '/auth/refresh',
      {
        refreshToken,
      },
    );

    await storeTokens(response.data.accessToken, response.data.refreshToken);
    return response.data;
  },

  async logout(): Promise<SuccessMessageResponse> {
    try {
      const response = await apiClient.post<SuccessMessageResponse>(
        '/auth/logout',
      );
      return response;
    } finally {
      await clearTokens();
    }
  },

  async me(): Promise<AuthenticatedUser> {
    const response = await apiClient.get<ApiResponse<AuthenticatedUser>>(
      '/auth/me',
    );
    return response.data;
  },

  async changePassword(
    payload: ChangePasswordInput,
  ): Promise<SuccessMessageResponse> {
    return apiClient.patch<SuccessMessageResponse>(
      '/auth/change-password',
      payload,
    );
  },
};

export {authQueryKeys};
