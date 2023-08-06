import { Outlet, Navigate } from "react-router";

const ProtectedRoutes = () => {
  let userRol = "admi";
  return <div>{userRol === "admin" ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default ProtectedRoutes;
