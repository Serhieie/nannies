import { ref, get } from 'firebase/database';
import { database } from '../../firebaseConfig/firebaseConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNannies = createAsyncThunk(
  'nannies/fetchNannies',
  async (_, { rejectWithValue }) => {
    try {
      const rootRef = ref(database);
      const snapshot = await get(rootRef);
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        throw new Error('Дані відсутні');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
