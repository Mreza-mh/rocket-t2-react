import React from "react";
import { Route, Navigate } from "react-router-dom";

function AuthRoute({ component: Component, ...rest }) {
  const isAuthenticated = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData && new Date().getTime() < userData.expirationTime;
  };

  return (

  );
}

export default AuthRoute;
