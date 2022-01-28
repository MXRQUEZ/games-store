import activisionLogo from "images/activision-1.png";
import rockstarLogo from "images/rockstar-1.png";
import ubisoftLogo from "images/ubisoft-1.png";
import cdProjLogo from "images/cd-project-red-1.png";
import ISponsor from "@/components/footer/iSponsor";

const sponsors: ISponsor[] = [
  {
    name: "Activision",
    url: "https://www.activision.com/",
    logo: activisionLogo,
    description: "Activision Blizzard logo",
    class: "wide",
  },
  {
    name: "Rockstar Games",
    url: "https://www.rockstargames.com/",
    logo: rockstarLogo,
    description: "Rockstar Games logo",
    class: "small",
  },
  {
    name: "Ubisoft",
    url: "https://www.ubisoft.com/",
    logo: ubisoftLogo,
    description: "Ubisoft logo",
    class: "small",
  },
  {
    name: "CD Project Red",
    url: "https://en.cdprojektred.com/",
    logo: cdProjLogo,
    description: "CD Project Red logo",
    class: "wide",
  },
];

export default sponsors;
