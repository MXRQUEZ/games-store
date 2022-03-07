import React, { FC } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import classes from "@/components/header/header.module.scss";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import Pathname from "@/constants/pathname";
import useActions from "@/hooks/redux/useActions";
import Roles from "@/constants/roles";

type ClickEvent = (event: React.MouseEvent<HTMLAnchorElement>) => void;

const UserMenu: FC = () => {
  const user = useTypedSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const orderLength = useTypedSelector((state) => state.order.order.length);
  const { signOut, signInModalOpen, signUpModalOpen } = useActions();
  const userIconClass = user?.role === Roles.Admin ? "fa fa-solid fa-crown" : "fa fa-solid fa-user";

  const onSignInHandler: ClickEvent = (event) => {
    event.preventDefault();
    signInModalOpen();
  };

  const onSignUpHandler: ClickEvent = (event) => {
    event.preventDefault();
    signUpModalOpen();
  };

  const onSignOutHandler: ClickEvent = (event) => {
    event.preventDefault();
    signOut();
    navigate("/");
  };

  return user ? (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${classes.link__active} ${classes.nav__routes_link}` : classes.nav__routes_link
          }
          to={Pathname.Profile}
        >
          <i className={userIconClass} aria-hidden />
          {user?.username || user?.login}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${classes.link__active} ${classes.nav__routes_link}` : classes.nav__routes_link
          }
          to={Pathname.Order}
        >
          <i className="fa fa-solid fa-cart-shopping" aria-hidden />
          {orderLength}
        </NavLink>
      </li>
      <li>
        <Link to="/" className={classes.nav__routes_link} onClick={onSignOutHandler}>
          <i className="fa fa-solid fa-arrow-right-from-bracket" aria-hidden />
        </Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/" onClick={onSignInHandler} className={classes.nav__routes_link}>
          Sign In
        </Link>
      </li>
      <li>
        <Link to="/" onClick={onSignUpHandler} className={classes.nav__routes_link}>
          Sign Up
        </Link>
      </li>
    </>
  );
};

export default UserMenu;
