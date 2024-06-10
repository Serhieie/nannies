import { createSlice } from '@reduxjs/toolkit';
import { fetchNannies } from './nanniesOperations';
import { initialStateNannies } from './nanniesInitialState';

const nanniesSlice = createSlice({
  name: 'nannies',
  initialState: initialStateNannies,
  reducers: {},
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

export default nanniesSlice.reducer;
