import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { initialStateUser } from './initialStateUser';
import {
  handlePending,
  handleRegisterFulfilled,
  handleRejected,
} from './userOperationHandlers';
import { UserState } from './initialStateUser.types';
import { registerUser } from './userOperations';

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    changeUserToken(state: UserState, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    changeIsLoadingToken(state: UserState, action: PayloadAction<boolean>) {
      state.isLoadingUser = action.payload;
    },
    changeUserStatus(state: UserState, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
    changeUserTheme(state: UserState, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, handleRegisterFulfilled)
      .addCase(registerUser.rejected, handleRejected);
  },
});

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token', 'theme'],
};

export const persistedUserReducer = persistReducer<UserState>(
  authPersistConfig,
  userSlice.reducer
);

export const {
  changeUserTheme,
  changeUserToken,
  changeIsLoadingToken,
  changeUserStatus,
} = userSlice.actions;
