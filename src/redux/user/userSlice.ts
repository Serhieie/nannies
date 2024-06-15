import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  registerUser,
  loginUser,
  logoutUser,
  updateUserProfile,
  UpdatedUserProfile,
} from './userOperations';
import { initialStateUser } from './initialStateUser';
import { updateUserStateAction, UserState } from './initialStateUser.types';
import {
  handlePending,
  handleRejected,
  handleLogoutFulfilled,
} from './userOperationHandlers';

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    changeUserTheme(state: UserState, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    updateUserState(
      state: UserState,
      action: PayloadAction<updateUserStateAction>
    ) {
      state.name = action.payload.name;
      state.photoURL = action.payload.avatar;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isLoggedIn = true;
        state.name = action.payload.displayName;
        state.email = action.payload.email || '';
        state.token = action.payload.uid;
      })
      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.isLoggedIn = true;
        state.name = action.payload.displayName;
        state.email = action.payload.email || '';
        state.token = action.payload.uid;
        state.photoURL = action.payload.photoURL
          ? action.payload.photoURL
          : state.photoURL;
      })
      .addCase(loginUser.rejected, handleRejected)
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, handleLogoutFulfilled)
      .addCase(logoutUser.rejected, handleRejected)
      .addCase(updateUserProfile.pending, handlePending)
      .addCase(
        updateUserProfile.fulfilled,
        (state, action: PayloadAction<UpdatedUserProfile>) => {
          state.isLoadingUser = false;
          state.name = action.payload.name ? action.payload.name : state.name;
          state.photoURL = action.payload.photoURL;
          state.error = null;
        }
      )
      .addCase(updateUserProfile.rejected, handleRejected);
  },
});

const authPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['error', 'isLoadingUser'],
};

export const persistedUserReducer = persistReducer<UserState>(
  authPersistConfig,
  userSlice.reducer
);

export const { changeUserTheme, updateUserState } = userSlice.actions;

export default userSlice.reducer;
