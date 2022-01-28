import { FC } from "react";
import SponsorLogo from "@/components/footer/sponsorLogo";
import ISponsor from "@/components/footer/iSponsor";

interface ISponsorLogos {
  sponsorsList: ISponsor[];
}

const SponsorLogos: FC<ISponsorLogos> = ({ sponsorsList }) => (
  <div className="sponsor-icons">
    {sponsorsList.map((sponsor) => (
      <SponsorLogo key={sponsor.name} sponsor={sponsor} />
    ))}
  </div>
);

export default SponsorLogos;
