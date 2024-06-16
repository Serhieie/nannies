import { NanniesState } from './nannies.types';

export const initialStateNannies: NanniesState = {
  nannies: [],
  favorites: [],
  activeNannie: null,
  isLoading: false,
  error: null,
  page: 1,
  total: 0,
};
