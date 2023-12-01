import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../actionType";

let InitialState = {
  isLoading: false,
  isAuth: localStorage.getItem("isAuth") ?? false,
  data: {},
  isError: false,
  errorMessage: "",
};

const LoginReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        data: payload,
        isError: false,
        errorMessage: "",
      };

    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        data: {},
        isError: true,
        errorMessage: payload,
      };

    case LOGOUT:
      localStorage.setItem("isAuth", false);
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default LoginReducer;
