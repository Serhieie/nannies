import { PayloadAction } from '@reduxjs/toolkit';
import { NanniesState } from './nannies.types';

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
