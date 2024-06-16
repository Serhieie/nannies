import { createSelector } from '@reduxjs/toolkit';
import { filterNannies } from '@/helpers';
import { RootState } from '../rootReducer';

export const selectPage = (state: RootState) => state.nannies.page;
export const selectTotal = (state: RootState) => state.nannies.total;
export const selectNannies = (state: RootState) => state.nannies.nannies;
export const selectFavorites = (state: RootState) => state.nannies.favorites;
export const selectFilter = (state: RootState) => state.filters.filter;

export const selectFilteredNannies = createSelector(
  [selectNannies, selectFilter],
  (nannies, filter) => filterNannies(nannies, filter)
);

export const selectFilteredFavorites = createSelector(
  [selectFavorites, selectFilter],
  (favorites, filter) => filterNannies(favorites, filter)
);
