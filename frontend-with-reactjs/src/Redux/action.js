import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "./actionType";

// using function curring here
export const SignupToServer = (newUser) => async (dispatch) => {
  let url = "";

  try {
    dispatch({ type: SIGNUP_REQUEST });
    // let data = await axios.post(url, newUser);
    dispatch({ type: SIGNUP_SUCCESS, payload: newUser });
  } catch (error) {
    dispatch({ type: SIGNUP_ERROR, payload: error });
  }
};

export const LoginToServer = (User) => async (dispatch) => {
  let url = "";

  try {
    dispatch({ type: LOGIN_REQUEST });
    // let data = await axios.post(url, User);
    dispatch({ type: LOGIN_SUCCESS, payload: User });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error });
  }
};
