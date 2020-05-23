// state is going to be somthing which is passed by redux store to the reducer 
// whenever any action fired as initially there wont be any state so we need to have an initial state.
import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
};

export default userReducer; 