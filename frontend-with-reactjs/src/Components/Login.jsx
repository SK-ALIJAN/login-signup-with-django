import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "./schema";
import { FiAlertCircle } from "react-icons/fi";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  let { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        if (!isError) toast.success("Thank you for login!");

        action.resetForm();
      },
    });

  let [passwordShow, setPassword] = useState(false);
  let { isLoading, isError, errorMessage } = useSelector(
    (store) => store.loginReducer
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
        <Heading>Login Here</Heading>
        <Label htmlFor="username">Enter Email</Label>
        <Input
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {errors.email && touched.email && (
          <p>
            <FiAlertCircle className={"icon"} /> {errors.email}
          </p>
        )}

        <Label htmlFor="password">Password</Label>
        <Input
          type={passwordShow ? "text" : "password"}
          placeholder="Password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {errors.password && touched.password ? (
          <p>
            <FiAlertCircle className={"icon"} /> {errors.password}
          </p>
        ) : (
          <div className="passwordShowHide">
            <input
              type="checkbox"
              onChange={() => {
                setPassword(!passwordShow);
              }}
            />
            Show password
          </div>
        )}

        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Please wait ..." : "Log In"}
        </Button>

        <Link to={"/signup"}>Create an account</Link>
      </Form>

      <ToastContainer />
    </div>
  );
};

export default Login;

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
  width: 400px;
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

  .passwordShowHide {
    margin-top: 10px;
    background-color: transparent;
    input {
      margin-right: 5px;
      width: 1rem;
      height: 1rem;
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
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
`;

const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
  color: white;
  outline: 0;

  &::placeholder {
    color: #e5e5e5;
  }

  &:focus {
    border: 2px solid white;
  }
`;

const Button = styled.button`
  margin-top: 50px;
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
`;
