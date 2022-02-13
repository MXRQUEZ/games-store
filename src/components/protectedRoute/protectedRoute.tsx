import { FC } from "react";
import { Route } from "react-router-dom";

interface IProtectedRouteProps {
  isAuth: boolean;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ isAuth, ...rest }) =>
  isAuth ? <Route {...rest} /> : <Route path="*" />;

export default ProtectedRoute;
