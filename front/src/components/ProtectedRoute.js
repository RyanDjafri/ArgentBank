import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UidContext } from "../components/AppContext";

const ProtectedRoute = ({ children }) => {
  const uid = useContext(UidContext);

  if (!uid) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
