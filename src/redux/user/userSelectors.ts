import { RootState } from '../rootReducer';
import { UserState } from './initialStateUser.types';

export const getUserState = (state: RootState): UserState => state.user;
export const getError = (state: RootState): null | string => state.user.error;
export const getIsLoadingUser = (state: RootState): boolean =>
  state.user.isLoadingUser;
export const getToken = (state: RootState): string | null => state.user.token;
export const getTheme = (state: RootState): string => state.user.theme;
export const getName = (state: RootState): string | null => state.user.name;
export const getAvatar = (state: RootState): string => state.user.photoURL;
export const getLogedIn = (state: RootState): boolean => state.user.isLoggedIn;
