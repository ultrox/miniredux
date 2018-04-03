import { AUTH_REQUEST, AUTH_SUCCESS } from '../constants';

const auth = (state = { user: {} }, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return Object.assign({ isFetching: true } ,state);
    case AUTH_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export const selectUserName = state => {
  let userTitle;
  console.log(state)
  const user = state.user;

  if( user.gender === "Male" ) {
    userTitle = "Mr."
  } else if ( user.maritalStatus === "Married" ) {
    userTitle = "Mrs."
  } else {
    userTitle = "Miss."
  }

  // returning derived data
  return `${userTitle} ${user.firstName} ${user.lastName}`
}

export default auth;
