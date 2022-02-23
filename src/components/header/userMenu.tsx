import React, { FC } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import classes from "@/components/header/header.module.scss";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import Pathname from "@/types/pathname";
import useActions from "@/hooks/redux/useActions";

type ClickEvent = (event: React.MouseEvent<HTMLAnchorElement>) => void;

const UserMenu: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const navigate = useNavigate();
  const { signOut, signInModalOpen, signUpModalOpen } = useActions();

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

  return isAuth ? (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${classes.link__active} ${classes.nav__routes_link}` : classes.nav__routes_link
          }
          to={Pathname.Profile}
        >
          <i className="fa fa-solid fa-user" aria-hidden />
          {user}
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${classes.link__active} ${classes.nav__routes_link}` : classes.nav__routes_link
          }
          to={Pathname.Profile}
        >
          <i className="fa fa-solid fa-cart-shopping" aria-hidden />0
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
          SignIn
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
