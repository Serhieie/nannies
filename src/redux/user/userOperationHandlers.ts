import { RegistrationData, UserState } from './initialStateUser.types';

export const handlePending = (state: UserState): UserState => {
  return { ...state, isLoadingUser: true };
};

export const handleRejected = (state: UserState): UserState => {
  return { ...state, error: true, isLoadingUser: false };
};

export const handleRegisterFulfilled = (
  state: UserState,
  action: { payload: RegistrationData }
): UserState => {
  if (action.payload && action.payload) {
    return {
      ...state,
      name: action.payload.name || '',
      email: action.payload.email || '',
      token: action.payload.token,
      isLoadingUser: false,
      isLoggedIn: false,
    };
  }
  return state;
};
