import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

const ProtectedRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
