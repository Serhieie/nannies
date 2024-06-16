import { ref, get, query, limitToFirst } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { database } from '@/firebaseConfig/firebaseConfig';
import { Nanny } from './nannies.types';

const nanniesRef = ref(database, '/nannies');

export const fetchNanniesTotal = createAsyncThunk<
  number,
  void,
  {
    rejectValue: string;
  }
>('nannies/fetchNanniesTotal', async (_, { rejectWithValue }) => {
  try {
    const totalSnapshot = await get(query(ref(database, '/nannies')));
    if (totalSnapshot.exists()) {
      const totalCount = totalSnapshot.size;
      return totalCount;
    } else {
      throw new Error('Дані відсутні');
    }
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

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
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchNannies = createAsyncThunk<
//   FetchNanniesResponse,
//   number,
//   { rejectValue: string }
// >(
//   'nannies/fetchNannies',
//   async (page: number, { getState, rejectWithValue }) => {
//     try {
//       const {
//         nannies: { nannies },
//       } = getState() as RootState;
//       let lastKey: string | null = null;
//       if (nannies.length > 0) {
//         lastKey = nannies[nannies.length - 1].id;
//       }

//       const nanniesQuery = lastKey
//         ? query(nanniesRef, orderByKey(), startAfter(lastKey), limitToFirst(3))
//         : query(nanniesRef, orderByKey(), limitToFirst(3));

//       const snapshot = await get(nanniesQuery);
//       if (snapshot.exists()) {
//         const newNannies: Nanny[] = [];
//         snapshot.forEach((childSnapshot) => {
//           const childData = childSnapshot.val();
//           const id = childSnapshot.key;
//           newNannies.push({ id, ...childData });
//         });
//         return { newNannies, page };
//       } else {
//         throw new Error('Дані відсутні');
//       }
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
