import { PayloadAction } from '@reduxjs/toolkit';
import { CustomUser, UserState } from './initialStateUser.types';
import { UpdatedUserProfile } from './userOperations';

export const handlePending = (state: UserState): UserState => {
  return { ...state, isLoadingUser: true, error: null };
};

export const handleRejected = (
  state: UserState,
  action: { payload: string | undefined }
): UserState => {
  return {
    ...state,
    error: action.payload || 'error',
    isLoadingUser: false,
  };
};

export const handleLogoutFulfilled = (state: UserState): UserState => {
  return {
    ...state,
    isLoadingUser: false,
    isLoggedIn: false,
    photoURL: '',
    name: '',
    email: '',
    token: '',
    error: null,
  };
};

export const handleRegisterUserFulfilled = (
  state: UserState,
  action: PayloadAction<CustomUser>
) => {
  state.isLoadingUser = false;
  state.isLoggedIn = true;
  state.name = action.payload.displayName;
  state.email = action.payload.email || '';
  state.token = action.payload.uid;
};

export const handleLoginUserFulfilled = (
  state: UserState,
  action: PayloadAction<CustomUser>
) => {
  state.isLoadingUser = false;
  state.isLoggedIn = true;
  state.name = action.payload.displayName;
  state.email = action.payload.email || '';
  state.token = action.payload.uid;
  state.photoURL = action.payload.photoURL ? action.payload.photoURL : '';
};

export const handleUpdateUserProfileFulfilled = (
  state: UserState,
  action: PayloadAction<UpdatedUserProfile>
) => {
  state.isLoadingUser = false;
  state.name = action.payload.name ? action.payload.name : state.name;
  state.photoURL = action.payload.photoURL ? action.payload.photoURL : '';
};
