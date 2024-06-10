import { UserState } from './initialStateUser.types';

export const handlePending = (state: UserState): UserState => {
  return { ...state, isLoadingUser: true, error: null };
};

export const handleRejected = (
  state: UserState,
  action: { payload: string | undefined }
): UserState => {
  return { ...state, error: action.payload || 'error', isLoadingUser: false };
};

export const handleLogoutFulfilled = (state: UserState): UserState => {
  return {
    ...state,
    isLoadingUser: false,
    isLoggedIn: false,
    email: '',
    token: '',
    error: null,
  };
};
