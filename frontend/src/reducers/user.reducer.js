import {
  LOGOUT_USER,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_PROFILE
} from "../actions/user.actions";

const initialState = {
  loginError: null,
  userProfile: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_USER:
      return {
        ...state,
        loginError: null,
        userProfile:"",
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loginError: null,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload,
      };
    
      case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
