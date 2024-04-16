import React, { useEffect, useState } from "react";
import Router from "./components/Router";
import { UidContext } from "./components/AppContext";
import axios from "axios";
import "./assets/style/App.css";

const App = () => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("jwt");
        if (!token) throw new Error("No token found");

        const res = await axios.post(
          `${process.env.REACT_APP_URL}profile`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUid(res.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();
  }, []);

  return (
    <UidContext.Provider value={uid}>
      <div className="App">
        <Router />
      </div>
    </UidContext.Provider>
  );
};

export default App;
