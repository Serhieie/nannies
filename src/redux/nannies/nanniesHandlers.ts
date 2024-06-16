import { PayloadAction } from '@reduxjs/toolkit';
import { FetchNanniesResponse, NanniesState } from './nannies.types';

export const handlePending = (state: NanniesState): NanniesState => {
  return { ...state, isLoading: true, error: null };
};

export const handleRejected = (
  state: NanniesState,
  action: { payload: string | undefined }
): NanniesState => {
  return {
    ...state,
    error: action.payload || 'error',
    isLoading: false,
  };
};

export const handleAddFavorite = (
  state: NanniesState,
  action: PayloadAction<string>
) => {
  const nannyId = action.payload;
  const nanny = state.nannies.find((nanny) => nanny.id === nannyId);
  if (nanny && !state.favorites.find((fav) => fav.id === nannyId)) {
    state.favorites.push(nanny);
  }
};

export const handleRemoveFavorite = (
  state: NanniesState,
  action: PayloadAction<string>
) => {
  const nannyId = action.payload;
  state.favorites = state.favorites.filter((fav) => fav.id !== nannyId);
};

export const fetchNanniesHandlerFulfilled = (
  state: NanniesState,
  action: PayloadAction<FetchNanniesResponse>
) => {
  if (action.payload.page === 1) {
    state.nannies = action.payload.newNannies;
  } else {
    state.nannies = [...state.nannies, ...action.payload.newNannies];
  }
  state.page = action.payload.page;
  state.isLoading = false;
  state.error = null;
};
export const handleFetchNanniesTotalFulfilled = (
  state: NanniesState,
  action: PayloadAction<number>
) => {
  state.isLoading = false;
  state.error = null;
  state.total = action.payload;
};
