import { UserState } from './initialStateUser.types';

export const initialStateUser: UserState = {
  name: '',
  email: '',
  token: '',
  error: null,
  isLoggedIn: false,
  isLoadingUser: false,
  avatar: '',
  theme: '',
};
