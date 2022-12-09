import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRoutes = ({ children }) => {
  const { state } = useContext(AuthContext);

  return !state?.logged ? children : <Navigate to="/search" />;
};
