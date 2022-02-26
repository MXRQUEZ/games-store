import { FC, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import Pathname from "@/types/pathname";
import { userKey } from "@/store/types/auth";
import { getUserById } from "@/shared/utils/apiRequests";
import useActions from "@/hooks/redux/useActions";
import Spinner from "@/components/ui/spinner/spinner";

interface IProtectedRouteProps {
  redirectTo?: string;
}

const ProtectedRoute: FC<IProtectedRouteProps> = ({ redirectTo = Pathname.Login }) => {
  const isAuth = !!useTypedSelector((state) => state.auth.user);
  const [spinner, setSpinner] = useState(true);
  const { signIn } = useActions();
  const location = useLocation();

  useEffect(() => {
    const userId = localStorage.getItem(userKey);
    if (userId && !isAuth) {
      (async () => {
        const user = await getUserById({ user: userId });
        user && signIn(user);
        setSpinner(false);
      })();
      return;
    }

    setSpinner(false);
  }, []);

  if (spinner) {
    return <Spinner />;
  }

  return isAuth ? <Outlet /> : <Navigate to={redirectTo} state={{ from: location }} />;
};
ProtectedRoute.defaultProps = {
  redirectTo: Pathname.Login,
};

export default ProtectedRoute;
