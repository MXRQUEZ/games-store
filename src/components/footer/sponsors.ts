import activisionLogo from "images/activision-1.png";
import rockstarLogo from "images/rockstar-1.png";
import ubisoftLogo from "images/ubisoft-1.png";
import cdProjLogo from "images/cd-project-red-1.png";

interface ISponsors {
  [company: string]: {
    url: string;
    logo: string;
    description: string;
  };
}

const sponsors: ISponsors = {
  activision: {
    url: "https://www.activision.com/",
    logo: activisionLogo,
    description: "Activision Blizzard logo",
  },
  cdProject: {
    url: "https://en.cdprojektred.com/",
    logo: cdProjLogo,
    description: "CD Project Red logo",
  },
  rockstar: {
    url: "https://www.rockstargames.com/",
    logo: rockstarLogo,
    description: "Rockstar Games logo",
  },
  ubisoft: {
    url: "https://www.ubisoft.com/",
    logo: ubisoftLogo,
    description: "Ubisoft logo",
  },
};

export default sponsors;
