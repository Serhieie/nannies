import { combineReducers } from 'redux';
import { persistedUserReducer } from './user/userSlice';
import { UserState } from './user/initialStateUser.types';
import nanniesReducer from './nannies/nanniesSlice';
import { NanniesState } from './nannies/nannies.types';

export interface RootState {
  user: UserState;
  nannies: NanniesState;
}

const rootReducer = combineReducers({
  user: persistedUserReducer,
  nannies: nanniesReducer,
});

export default rootReducer;
