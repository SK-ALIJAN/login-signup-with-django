import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { LOGOUT } from "../Redux/actionType";

const Home = () => {
  let { data } = useSelector((store) => store.signupReducer);
  let dispatch = useDispatch();

  let handleLogout = () => {
    toast("logged out successfully !");

    setTimeout(() => {
      dispatch({ type: LOGOUT });
    }, 2000);
  };

  return (
    <div>
      <Background>
        <Shape></Shape>
        <Shape></Shape>
      </Background>
      <DIV>
        <Heading>Welcome , {data.name}</Heading>
        <p id="email"> {data.email}</p>
        <Button onClick={handleLogout}>Click here to Logout</Button>
      </DIV>

      <ToastContainer />
    </div>
  );
};

export default Home;

const Background = styled.div`
  width: 400px;
  height: 420px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;

const Shape = styled.div`
  height: 150px;
  width: 150px;
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

const DIV = styled.div`
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

  #email {
    margin-top: 1rem;
    text-align: center;
    font-weight: 600;
    letter-spacing: 2px;
  }
`;

const Heading = styled.h3`
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  background-color: transparent;
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
  transition: ease-in-out;

  &:active {
    transform: scale(1.1);
  }
`;
