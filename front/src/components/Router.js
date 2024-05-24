import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transactions from "../pages/Transactions";
import Auth from "../pages/SignIn";
import Home from "../pages/Home";
// import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          {/* <Route
            path="/user"
            element={
              <ProtectedRoute>
                <Transactions />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/user" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
