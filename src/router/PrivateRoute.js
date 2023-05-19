import { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";

export const PrivateRoute = ({ children, ...rest }) => {
  // const token = localStorage.getItem("token");
  // const [token, setToken] = useState(false);
  // console.log("token:", token);
  // useEffect(() => {
  //   const tokenFromLocalStorage = localStorage.getItem("token");
  //   if (tokenFromLocalStorage) {
  //     setToken(true);
  //   }
  // }, []);

  // return (
  //   <Route {...rest} element={token ? children : <Navigate to="/login" />} />
  // );

  return (
    <Route {...rest} element={false ? children : <Navigate to="/login" />} />
  );
};
