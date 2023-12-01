import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "./schema";
import { FiAlertCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignupToServer } from "../Redux/action";

const initialValues = {
  name: "",
  email: "",
  password1: "",
  password2: "",
};

const Signup = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, action) => {
        if (!isError) {
          toast.success("Thank you for signup!");
          dispatch(SignupToServer(values));
        }

        setTimeout(() => {
          if (!isError) navigate("/login");
        }, 2000);
        action.resetForm();
      },
    });

  let { isLoading, isError, errorMessage } = useSelector(
    (store) => store.signupReducer
  );

  useEffect(() => {
    if (isError) {
      toast.warn("something went wrong");
    }
  }, [isError]);

  return (
    <div>
      <Background>
        <Shape></Shape>
        <Shape></Shape>
      </Background>
      <Form onSubmit={handleSubmit}>
        <Heading>Signup Here</Heading>

        <Label htmlFor="username">User's name</Label>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />

        {errors.name && touched.name && (
          <p>
            <FiAlertCircle className={"icon"} /> {errors.name}
          </p>
        )}

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />

        {errors.email && touched.email && (
          <p>
            <FiAlertCircle className={"icon"} />
            {errors.email}
          </p>
        )}

        <Label htmlFor="password1">Password</Label>
        <Input
          type="password"
          placeholder="Password"
          name="password1"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password1}
        />

        {errors.password1 && touched.password1 && (
          <p>
            <FiAlertCircle className={"icon"} />
            {errors.password1}
          </p>
        )}

        <Label htmlFor="password2">Confirm Password</Label>
        <Input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password2}
        />

        {errors.password2 && touched.password2 && (
          <p>
            <FiAlertCircle className={"icon"} />
            {errors.password2}
          </p>
        )}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Please wait ..." : "Signup"}
        </Button>

        <Link to={"/login"}>I already have an account</Link>
      </Form>

      <ToastContainer />
    </div>
  );
};

export default Signup;

const Background = styled.div`
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;

  &:first-child {
    background: linear-gradient(#1845ad, #23a2f6);
    left: -80px;
    top: -80px;
  }

  &:last-child {
    background: linear-gradient(to right, #ff512f, #f09819);
    right: -30px;
    bottom: -80px;
  }
`;

const Form = styled.form`
  height: max-content;
  width: 450px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  color: #ffffff;

  a {
    background-color: transparent;
    margin-top: 1rem;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  p {
    background-color: transparent;
    margin-top: 5px;
    display: flex;
    align-items: center;

    .icon {
      background-color: transparent;
      margin-right: 0.5rem;
    }
  }
`;

const Heading = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  background-color: transparent;
`;

const Label = styled.label`
  display: block;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
`;

const Input = styled.input`
  display: block;
  height: 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 2px;
  font-size: 14px;
  font-weight: 300;
  outline: 0;
  color: white;

  &::placeholder {
    color: #e5e5e5;
  }

  &:focus {
    border: 2px solid white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

const Button = styled.button`
  margin-top: 1.6rem;
  width: 100%;
  background: linear-gradient(#1845ad99, #23a2f6);
  color: #ffffff;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: 0;
  margin-bottom: 10px;
  transition: ease-in-out;

  &:active {
    transform: scale(1.1);
  }
`;
