import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebaseConfig/firebaseConfig';
import { toast } from 'react-toastify';
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

    if (userCredential) {
      toast.success('Registration success', {
        position: 'bottom-right',
      });
    }
    return userCredential.user;
  } catch (error: any) {
    toast.error('Registration failed', {
      position: 'bottom-right',
    });
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
    if (userCredential.user) {
      toast.success('Login success', {
        position: 'bottom-right',
      });
    }
    return userCredential.user;
  } catch (error: any) {
    toast.error('Login failed', {
      position: 'bottom-right',
    });
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk<void, void, { rejectValue: string }>(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await signOut(auth);

      toast.warning('Logout success', {
        position: 'bottom-right',
      });
    } catch (error: any) {
      toast.error('Logout failed', {
        position: 'bottom-right',
      });
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
