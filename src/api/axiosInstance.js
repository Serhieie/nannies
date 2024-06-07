import axios from 'axios';

export const instance = axios.create({
  baseURL: '',
});

// export const token = {
//   set(token: string): void {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset(): void {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const apiCall = async (path, method = 'get', body) => {
  try {
    const response = await instance[method](path, body, {
      headers: { 'content-type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const register = (body) => apiCall(`auth/register`, 'get', body);
