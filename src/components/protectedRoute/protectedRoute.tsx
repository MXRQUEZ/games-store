import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import Pathname from "@/types/pathname";

interface IProtectedRouteProps {
  redirectTo?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ redirectTo = Pathname.Login }) => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const location = useLocation();
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} state={{ from: location }} />;
};

ProtectedRoute.defaultProps = {
  redirectTo: Pathname.Login,
};

export default ProtectedRoute;
