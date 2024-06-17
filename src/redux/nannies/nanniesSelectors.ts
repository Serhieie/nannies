import { createSelector } from '@reduxjs/toolkit';
import { filterNannies } from '@/helpers';
import { RootState } from '../rootReducer';
import {
  selectFavoriteFilter,
  selectFilter,
} from '../filters/filtersSelectors';

export const selectPage = (state: RootState) => state.nannies.page;
export const selectTotal = (state: RootState) => state.nannies.total;
export const selectNannies = (state: RootState) => state.nannies.nannies;
export const selectFavorites = (state: RootState) => state.nannies.favorites;

export const selectFilteredNannies = createSelector(
  [selectNannies, selectFilter],
  (nannies, filter) => filterNannies(nannies, filter)
);

export const selectFilteredFavorites = createSelector(
  [selectFavorites, selectFavoriteFilter],
  (favorites, filter) => filterNannies(favorites, filter)
);
