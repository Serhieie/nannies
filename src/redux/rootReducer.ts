import { combineReducers } from 'redux';
import { persistedUserReducer } from './user/userSlice';
import { UserState } from './user/initialStateUser.types';
import { persistedNanniesReducer } from './nannies/nanniesSlice';
import { NanniesState } from './nannies/nannies.types';

export interface RootState {
  user: UserState;
  nannies: NanniesState;
}

const rootReducer = combineReducers({
  user: persistedUserReducer,
  nannies: persistedNanniesReducer,
});

export default rootReducer;
