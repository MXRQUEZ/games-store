import classes from "./footer.module.scss";
import sponsors from "@/constants/sponsors";
import SponsorLogos from "@/components/footer/sponsorLogos";

const yearNow = new Date().getFullYear();
const copyrights = `${yearNow} Games Store | All rights reserved | Terms Of Service | Privacy`;

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.copyrights__container}>
      <p>&copy;{copyrights}</p>
    </div>
    <SponsorLogos sponsorsList={sponsors} />
  </footer>
);

export default Footer;
