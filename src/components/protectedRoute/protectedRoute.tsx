import { FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useTypedSelector from "@/hooks/redux/useTypedSelector";

interface IProtectedRouteProps {
  redirectTo?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ redirectTo = "/:login" }) => {
  const isAuth = useTypedSelector((state) => state.auth.isAuth);
  const location = useLocation();
  return isAuth ? <Outlet /> : <Navigate to={redirectTo} state={{ from: location }} />;
};

ProtectedRoute.defaultProps = {
  redirectTo: "/:login",
};

export default ProtectedRoute;
