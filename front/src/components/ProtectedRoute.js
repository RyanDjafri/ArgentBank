import React, { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UidContext } from "../components/AppContext";

const ProtectedRoute = () => {
  const uid = useContext(UidContext);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    if (uid) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [uid]);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
