export interface ProviderUserInfo {
  providerId: string;
  federatedId: string;
  email: string;
  rawId: string;
}

export interface User {
  localId: string;
  email: string;
  passwordHash: string;
  emailVerified: boolean;
  passwordUpdatedAt: number;
  providerUserInfo: ProviderUserInfo[];
  validSince: string;
  lastLoginAt: string;
  createdAt: string;
  lastRefreshAt: string;
}

export interface RegistrationResponse {
  kind: string;
  users: User[];
}

export interface LoginResponse {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
}

export interface UserState {
  name: string;
  email: string;
  token: string;
  error: string | null;
  isLoggedIn: boolean;
  isLoadingUser: boolean;
  avatar: string;
  theme: string;
}

export type TokenDataReject = {
  message: string;
  token: string;
};

export interface Credentials {
  username: string;
  password: string;
}

export interface CredentialsLogin {
  email: string;
  password: string;
}

export interface CredentialsRegistration {
  name: string;
  email: string;
  password: string;
}
