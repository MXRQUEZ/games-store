import { FC } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  isAuth: boolean;
  element: JSX.Element;
  redirectTo?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ isAuth, element, redirectTo = "/" }) =>
  isAuth ? element : <Navigate to={redirectTo} />;

ProtectedRoute.defaultProps = {
  redirectTo: "/",
};

export default ProtectedRoute;
