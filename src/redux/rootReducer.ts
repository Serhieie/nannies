import { combineReducers } from 'redux';
import { persistedUserReducer } from './user/userSlice';
import { UserState } from './user/initialStateUser.types';

export interface RootState {
  // nannies: '';
  user: UserState;
}

const rootReducer = combineReducers({
  // nannies: '',
  user: persistedUserReducer,
});

export default rootReducer;
