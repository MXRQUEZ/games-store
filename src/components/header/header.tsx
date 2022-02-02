import Navbar from "./navbar";
import classes from "./header.module.scss";

const storeName = "Games $tore";

const Header = () => (
  <header className={classes.header}>
    <Navbar title={storeName} />
  </header>
);

export default Header;
