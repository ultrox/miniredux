import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import auth, * as fromAuth from './auth'; // this was changed
import rooms from './rooms';

const reducer = combineReducers({
  auth,
  rooms
});

// simplifiing design 
export const selectUserName = state => fromAuth.selectUserName(state.auth)

export default reducer;
