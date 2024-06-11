import { createSlice } from '@reduxjs/toolkit';
import { fetchNannies } from './nanniesOperations';
import { initialStateNannies } from './nanniesInitialState';
import { handleAddFavorite, handleRemoveFavorite } from './nanniesHandlers';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { NanniesState } from './nannies.types';

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: initialStateNannies,
  reducers: {
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    setActive: (state, action) => {
      state.activeNannie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNannies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNannies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.nannies = action.payload;
        state.error = null;
      })
      .addCase(fetchNannies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

const nanniesPersistConfig = {
  key: 'nannies',
  storage,
  whitelist: ['favorites'],
};

export const persistedNanniesReducer = persistReducer<NanniesState>(
  nanniesPersistConfig,
  nanniesSlice.reducer
);

export const { addFavorite, setActive, removeFavorite } = nanniesSlice.actions;

export default nanniesSlice.reducer;
