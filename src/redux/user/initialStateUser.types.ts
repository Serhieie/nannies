export interface UserState {
  name: string;
  email: string;
  token: string | null;
  isLoggedIn: boolean;
  isLoadingUser: boolean;
  avatar: string;
  theme: string;
  error: boolean;
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

export type RegistrationData = {
  name: string;
  email: string;
  token?: string;
};
