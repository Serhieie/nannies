import { UserState } from './initialStateUser.types';

export const initialStateUser: UserState = {
  name: '',
  email: '',
  token: '',
  error: false,
  isLoggedIn: false,
  isLoadingUser: false,
  avatar: '',
  theme: '',
};
