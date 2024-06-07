import { RootState } from '../rootReducer';
import { UserState } from './initialStateUser.types';

export const getUserState = (state: RootState): UserState => state.user;
export const getError = (state: RootState): boolean => state.user.error;
export const getIsLoadingUser = (state: RootState): boolean =>
  state.user.isLoadingUser;
export const getToken = (state: RootState): string | null => state.user.token;
export const getTheme = (state: RootState): string => state.user.theme;
export const getAvatar = (state: RootState): string => state.user.avatar;
export const getLogedIn = (state: RootState): boolean => state.user.isLoggedIn;
