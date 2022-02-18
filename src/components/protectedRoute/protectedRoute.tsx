import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface IProtectedRouteProps {
  isAuth: boolean;
  redirectTo?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ isAuth, redirectTo = "/" }) => {
  const location = useLocation();
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} state={{ from: location }} />;
};

ProtectedRoute.defaultProps = {
  redirectTo: "/",
};

export default ProtectedRoute;
