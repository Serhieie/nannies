import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { FiltersState, FilterType } from './filters.types';

const initialState: FiltersState = {
  filter: 'Show all',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

const filtersPersistConfig = {
  key: 'filters',
  storage,
};

export const persistedFiltersReducer = persistReducer(
  filtersPersistConfig,
  filtersSlice.reducer
);

export const { setFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
