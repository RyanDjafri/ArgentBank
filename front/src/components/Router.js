import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transactions from "../pages/Transactions";
import Auth from "../pages/SignIn";
import Home from "../pages/Home";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Auth />} />
          <Route path="/transa" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
