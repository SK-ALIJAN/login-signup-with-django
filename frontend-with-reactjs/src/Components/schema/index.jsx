import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("please enter your name"),
  email: Yup.string().email().required("please enter your email"),
  password1: Yup.string().min(6).required("please enter your password"),
  password2: Yup.string()
    .required("this is required field")
    .oneOf([Yup.ref("password1"), null], "Password must be match"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("please enter your email"),
  password: Yup.string().min(6).required("please enter your password"),
});
