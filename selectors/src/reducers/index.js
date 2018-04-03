import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import auth, * as fromAuth from './auth';
import rooms from './rooms';

const reducer = combineReducers({
  auth,
  rooms
});

export default reducer;
