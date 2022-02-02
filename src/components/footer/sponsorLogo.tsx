import { FC } from "react";
import ISponsor from "../../types/iSponsor";

interface ISponsorLogo {
  sponsor: ISponsor;
}

const SponsorLogo: FC<ISponsorLogo> = ({ sponsor }) => (
  <a className="logo" href={sponsor.url} target="_blank" rel="noopener noreferrer">
    <img className={sponsor.class} src={sponsor.logo} alt={sponsor.description} />
  </a>
);

export default SponsorLogo;
