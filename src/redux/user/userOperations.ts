import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebaseConfig/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import {
  CredentialsLogin,
  CredentialsRegistration,
} from './initialStateUser.types';

export const registerUser = createAsyncThunk<
  User,
  CredentialsRegistration,
  { rejectValue: string }
>('auth/register', async (credentials, thunkApi) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );

    console.log(userCredential.user.uid);
    return userCredential.user;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk<
  User,
  CredentialsLogin,
  { rejectValue: string }
>('auth/login', async (credentials, thunkApi) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    return userCredential.user;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await signOut(auth);
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
