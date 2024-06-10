import React, { useEffect } from "react";
import Routes from "./components/Router";
import { useDispatch } from "react-redux";
import { setUidToken } from "./components/uidSlice";
import { getUserProfile } from "./components/actions/profil.actions";
import "./assets/style/App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      console.log("Token found:", token);
      dispatch(setUidToken(token));
      dispatch(getUserProfile());
    } else {
      console.log("No token found");
    }
  }, [dispatch]);

  return <Routes />;
};

export default App;
