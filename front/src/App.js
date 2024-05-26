import React, { useEffect, useState } from "react";
import Routes from "./components/Router";
import { UidContext } from "./components/AppContext";
import { useDispatch } from "react-redux";
import { getUserProfile } from "./components/actions/profil.actions";
import "./assets/style/App.css";

const App = () => {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      console.log("Token found:", token);
      setUid(token);
      dispatch(getUserProfile());
    } else {
      console.log("No token found");
    }
  }, [dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
};

export default App;
