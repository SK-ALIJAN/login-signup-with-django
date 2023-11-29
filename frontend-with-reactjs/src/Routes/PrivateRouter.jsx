import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  let { isAuth } = useSelector((store) => store.loginReducer);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default PrivateRouter;
