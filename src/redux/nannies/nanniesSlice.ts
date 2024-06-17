import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchNannies, fetchNanniesTotal } from './nanniesOperations';
import { initialStateNannies } from './nanniesInitialState';
import {
  handleAddFavorite,
  handleFetchNanniesTotalFulfilled,
  handlePending,
  handleRejected,
  handleRemoveFavorite,
} from './nanniesHandlers';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { NanniesState, Nanny } from './nannies.types';

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: initialStateNannies,
  reducers: {
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    setActive: (state: NanniesState, action: PayloadAction<Nanny>) => {
      state.activeNannie = action.payload;
    },
    setPage: (state: NanniesState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotal: (state: NanniesState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNannies.pending, handlePending)
      .addCase(fetchNannies.fulfilled, (state: NanniesState, action) => {
        state.nannies = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchNannies.rejected, (state: NanniesState, action) => {
        state.error = action.payload as string;
      })
      .addCase(fetchNanniesTotal.pending, handlePending)
      .addCase(fetchNanniesTotal.fulfilled, handleFetchNanniesTotalFulfilled)
      .addCase(fetchNanniesTotal.rejected, handleRejected);
  },
});

const nanniesPersistConfig = {
  key: 'nannies',
  storage,
  whitelist: ['favorites', 'total'],
};

export const persistedNanniesReducer = persistReducer<NanniesState>(
  nanniesPersistConfig,
  nanniesSlice.reducer
);

export const { addFavorite, setActive, removeFavorite, setPage, setTotal } =
  nanniesSlice.actions;

export default nanniesSlice.reducer;
