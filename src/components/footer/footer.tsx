import classes from "./footer.module.scss";
import sponsors from "@/constants/sponsors";
import SponsorLogos from "@/components/footer/sponsorLogos";
import { copyrights } from "@/constants/other";

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.copyrights__container}>
      <p>&copy;{copyrights}</p>
    </div>
    <SponsorLogos sponsorsList={sponsors} />
  </footer>
);

export default Footer;
