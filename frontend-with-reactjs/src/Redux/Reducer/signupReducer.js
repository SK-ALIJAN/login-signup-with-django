import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionType";

let InitialState = {
  isLoading: false,
  data: {},
  isError: false,
  errorMessage: "",
};

const signupReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload,
        isError: false,
        errorMessage: "",
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        data: {},
        isError: true,
        errorMessage: payload,
      };

    default:
      return state;
  }
};

export default signupReducer;
