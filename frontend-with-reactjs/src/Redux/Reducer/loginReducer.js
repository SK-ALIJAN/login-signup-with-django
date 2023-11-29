import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType";

let InitialState = {
  isLoading: false,
  isAuth: false,
  data: {},
  isError: false,
  errorMessage: "",
};

const LoginReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
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

    default:
      return state;
  }
};

export default LoginReducer;
