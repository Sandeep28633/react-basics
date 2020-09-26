import { GET_SIGN_IN, GET_SIGN_OUT } from "../actions/types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};
export const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case GET_SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
