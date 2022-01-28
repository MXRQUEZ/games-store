import { FC } from "react";
import ISponsor from "./iSponsor";

interface ISponsorLogoProps {
  sponsor: ISponsor;
}

const SponsorLogo: FC<ISponsorLogoProps> = ({ sponsor }) => (
  <a className={sponsor.class} href={sponsor.url} target="_blank" rel="noopener noreferrer">
    <img src={sponsor.logo} alt={sponsor.description} />
  </a>
);

export default SponsorLogo;
