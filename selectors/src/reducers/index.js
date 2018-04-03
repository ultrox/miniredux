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

export const selectUserRoom = state => {
  const userReservation = state.auth.user.reservation;
  const roomList = state.rooms.list;
  return roomList.find(room => room.id === userReservation.roomType)
}
export default reducer;
