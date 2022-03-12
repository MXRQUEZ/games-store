import { FC, memo } from "react";
import classes from "./spinner.module.scss";

const Spinner: FC = () => <div className={classes.spinner} />;

export default memo(Spinner);
