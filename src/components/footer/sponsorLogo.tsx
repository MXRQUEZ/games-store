import { FC } from "react";
import ISponsor from "../../types/iSponsor";
import classes from "./footer.module.scss";

interface ISponsorLogoProps {
  sponsor: ISponsor;
}

const SponsorLogo: FC<ISponsorLogoProps> = ({ sponsor }) => (
  <a className={classes.sponsors_logo} href={sponsor.url} target="_blank" rel="noopener noreferrer">
    <img className={sponsor.class} src={sponsor.logo} alt={sponsor.description} />
  </a>
);

export default SponsorLogo;
