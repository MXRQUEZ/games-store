import { FC } from "react";
import classes from "./footer.module.scss";
import SponsorLogo from "@/components/footer/sponsorLogo";
import ISponsor from "@/types/iSponsor";

interface ISponsorLogosProps {
  sponsorsList: ISponsor[];
}

const SponsorLogos: FC<ISponsorLogosProps> = ({ sponsorsList }) => (
  <div className={classes.sponsors}>
    {sponsorsList.map((sponsor) => (
      <SponsorLogo key={sponsor.name} sponsor={sponsor} />
    ))}
  </div>
);

export default SponsorLogos;
