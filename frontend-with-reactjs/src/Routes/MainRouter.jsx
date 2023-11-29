import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import NotFoundPage from "../Components/NotFoundPage";

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouter;
