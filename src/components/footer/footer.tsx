import { FC, memo } from "react";
import classes from "./footer.module.scss";
import sponsors from "@/constants/sponsors";
import SponsorLogos from "@/components/footer/sponsorLogos";
import { copyrights } from "@/constants/constants";

const Footer: FC = () => (
  <footer className={classes.footer}>
    <div className={classes.copyrights__container}>
      <p>&copy;{copyrights}</p>
    </div>
    <SponsorLogos sponsorsList={sponsors} />
  </footer>
);

export default memo(Footer);
