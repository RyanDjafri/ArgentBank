import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "./components/Router";
import axios from "axios";
import { getUserProfile } from "./components/actions/profil.actions";
import "./assets/style/App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("jwt");
        if (!token) throw new Error("No token found");
        console.log(token);

        const res = await axios.post(
          `${process.env.REACT_APP_URL}profile`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(getUserProfile(res.data));
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, [dispatch]);

  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
