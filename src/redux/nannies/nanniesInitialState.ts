import { NanniesState } from './nannies.types';

export const initialStateNannies: NanniesState = {
  nannies: [],
  isLoading: false,
  error: null,
  status: 'idle',
};
