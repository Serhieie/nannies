import { createSelector } from '@reduxjs/toolkit';
import { filterNannies } from '../../helpers/filterNannies';
import { RootState } from '../rootReducer';

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
