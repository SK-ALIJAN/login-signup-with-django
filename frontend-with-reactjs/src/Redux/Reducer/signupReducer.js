import { SIGNUP_ERROR, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../actionType";

let InitialState = {
  isLoading: false,
  data: JSON.parse(localStorage.getItem("signupdata")) || {},
  isError: false,
  errorMessage: "",
};

const signupReducer = (state = InitialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };

    case SIGNUP_SUCCESS:
      localStorage.setItem("signupdata", JSON.stringify(payload));
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
