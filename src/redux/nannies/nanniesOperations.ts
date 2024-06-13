import { ref, get, query, limitToFirst } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '../../firebaseConfig/firebaseConfig';
import { Nanny } from './nannies.types';

const nanniesRef = ref(database, '/');
export const fetchNannies = createAsyncThunk(
  'nannies/fetchNannies',
  async (pageSize: number, { rejectWithValue }) => {
    try {
      const firstPageQuery = query(nanniesRef, limitToFirst(pageSize));
      const snapshot = await get(firstPageQuery);
      if (snapshot.exists()) {
        const nannies: Nanny[] = [];
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          const id = childSnapshot.key;
          nannies.push({ id, ...childData });
        });
        return nannies;
      } else {
        throw new Error('Дані відсутні');
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
