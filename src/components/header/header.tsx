import React, { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.scss";
import routes from "@/constants/routes";
import images from "@/constants/images";
import { storeName } from "@/constants/constants";
import Navbar from "@/components/header/navbar";

interface IHeaderProps {
  isAuth: boolean;
  setAuth: (authState: boolean) => void;
  setSignInActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSignUpActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<IHeaderProps> = ({ isAuth, setAuth, setSignInActive, setSignUpActive }) => {
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

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <img className={classes.store__logo} src={images.storeLogo.path} alt={images.storeLogo.description} />
        <h1 className={classes.store__title}>{storeName}</h1>
        <Navbar routes={routes} />
        <div>
          <ul className={classes.nav__routes}>
            {isAuth ? (
              <li>
                <Link to="/" onClick={onSignOutHandler} className={classes.nav__routes_link}>
                  Sign Out
                </Link>
              </li>
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

export default React.memo(Header);
