import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { FiltersState, FilterType } from './filters.types';

const initialState: FiltersState = {
  filter: 'Show all',
  searchedName: '',
  favoriteFilter: 'Show all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
    setFavoriteFilter: (state, action: PayloadAction<FilterType>) => {
      state.favoriteFilter = action.payload;
    },
    setSearchedName: (state, action: PayloadAction<string>) => {
      state.searchedName = action.payload;
    },
  },
});

const filtersPersistConfig = {
  key: 'filters',
  storage,
  blacklist: ['searchedName'],
};

export const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filtersSlice.reducer
);

export const { setFilter, setSearchedName, setFavoriteFilter } =
  filtersSlice.actions;

export default filtersSlice.reducer;
