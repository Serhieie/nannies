import { combineReducers } from 'redux';
import { persistedUserReducer } from './user/userSlice';
import { UserState } from './user/initialStateUser.types';
import { persistedNanniesReducer } from './nannies/nanniesSlice';
import { NanniesState } from './nannies/nannies.types';
import { ModalsState } from './modals/modals.types';
import modalsReducer from './modals/modalsSlice';
import { FiltersState } from './filters/filters.types';
import { persistedFiltersReducer } from './filters/filtersSlice';

export interface RootState {
  user: UserState;
  nannies: NanniesState;
  modals: ModalsState;
  filters: FiltersState;
}

const rootReducer = combineReducers({
  user: persistedUserReducer,
  nannies: persistedNanniesReducer,
  modals: modalsReducer,
  filters: persistedFiltersReducer,
});

export default rootReducer;
