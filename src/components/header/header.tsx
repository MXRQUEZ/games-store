import React, { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./header.module.scss";
import routes from "@/constants/routes";
import images from "@/constants/images";
import { storeName } from "@/constants/constants";
import Navbar from "@/components/header/navbar";

interface IHeaderProps {
  isAuth: boolean;
  userName: string;
  setAuth: (authState: boolean) => void;
  setSignInActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSignUpActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ isAuth, userName, setAuth, setSignInActive, setSignUpActive }) => {
  const onSignInHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setSignInActive(true);
  };

  const onSignUpHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setSignUpActive(true);
  };

  const onSignOutHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setAuth(false);
  };

  const onClickHandler = (event: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>) => {
    event.preventDefault();
    setSignInActive(true);
  };

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <img className={classes.store__logo} src={images.storeLogo.path} alt={images.storeLogo.description} />
        <h1 className={classes.store__title}>{storeName}</h1>
        <Navbar routes={routes} onClick={!isAuth ? onClickHandler : undefined} />
        <div>
          <ul className={classes.nav__routes}>
            {isAuth ? (
              <>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `${classes.link__active} ${classes.nav__routes_link}` : classes.nav__routes_link
                    }
                    to="/profile"
                  >
                    <i className="fa fa-solid fa-user" aria-hidden />
                    {userName}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `${classes.link__active} ${classes.nav__routes_link}` : classes.nav__routes_link
                    }
                    to="/profile"
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
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
