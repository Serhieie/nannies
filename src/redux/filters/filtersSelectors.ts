import { RootState } from '../rootReducer';

export const selectFilter = (state: RootState) => state.filters.filter;
export const selectFavoriteFilter = (state: RootState) =>
  state.filters.favoriteFilter;
export const selectSearchedName = (state: RootState) =>
  state.filters.searchedName;
