import { FC, memo } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import Pathnames from "@/constants/pathnames";

interface IProtectedRouteProps {
  redirectTo?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ redirectTo = Pathnames.Login }) => {
  const isAuth = !!useTypedSelector((state) => state.auth.user);
  const location = useLocation();

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} state={{ from: location }} />;
};
ProtectedRoute.defaultProps = {
  redirectTo: Pathnames.Login,
};

export default memo(ProtectedRoute);
