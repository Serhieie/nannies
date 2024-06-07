import { AxiosResponse } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { register } from '../../api/axiosInstance.js';
import { Dispatch } from 'redux';
import {
  CredentialsRegistration,
  RegistrationData,
} from './initialStateUser.types';

export const registerUser = createAsyncThunk<
  RegistrationData,
  CredentialsRegistration,
  {
    rejectValue: string;
    dispatch: Dispatch;
  }
>('auth/register', async (credentials, thunkApi) => {
  try {
    const { data }: AxiosResponse<RegistrationData> =
      await register(credentials);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue('Bad Request');
  }
});
