import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios';
import { Nanny } from '../redux/nannies/nannies.types';
import {
  CredentialsLogin,
  CredentialsRegistration,
} from '../redux/user/initialStateUser.types';

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
});

interface ApiCallOptions {
  method?: Method;
  path: string;
  body?: CredentialsLogin | CredentialsRegistration;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
}

export const apiCall = async <T>({
  method = 'get',
  path,
  body,
}: ApiCallOptions): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: path,
      data: body,
      headers: { 'Content-Type': 'application/json' },
    };
    const response: ApiResponse<T> = await instance.request<T>(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const getNannies = async (): Promise<Nanny[]> => {
  return apiCall<Nanny[]>({ method: 'get', path: '/.json' });
};

export const register = async (body: CredentialsRegistration): Promise<any> => {
  return apiCall<any>({ method: 'post', path: '/auth/register', body });
};
