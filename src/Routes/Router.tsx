import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LoginStateAtom } from "../Recoil/LoginState";
import Browse from "./Browse/Browse";
import Home from "./Home/Home";

const Router = () => {
  const loginState = useRecoilValue(LoginStateAtom);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={loginState ? <Navigate replace to="/browse" /> : <Home />}
        />
        <Route
          path="/browse"
          element={loginState ? <Browse /> : <Navigate replace to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
