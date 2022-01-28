import activisionLogo from "images/activision-1.png";
import rockstarLogo from "images/rockstar-1.png";
import ubisoftLogo from "images/ubisoft-1.png";
import cdProjLogo from "images/cd-project-red-1.png";
import ISponsor from "@/components/footer/iSponsor";

interface ISponsors {
  [company: string]: ISponsor;
}

const sponsors: ISponsors = {
  activision: {
    url: "https://www.activision.com/",
    logo: activisionLogo,
    description: "Activision Blizzard logo",
    class: "logo__large",
  },
  cdProject: {
    url: "https://en.cdprojektred.com/",
    logo: cdProjLogo,
    description: "CD Project Red logo",
    class: "logo__large",
  },
  rockstar: {
    url: "https://www.rockstargames.com/",
    logo: rockstarLogo,
    description: "Rockstar Games logo",
    class: "logo",
  },
  ubisoft: {
    url: "https://www.ubisoft.com/",
    logo: ubisoftLogo,
    description: "Ubisoft logo",
    class: "logo",
  },
};

export default sponsors;
