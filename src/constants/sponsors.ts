import activisionLogo from "images/activision.png";
import rockstarLogo from "images/rockstar.png";
import ubisoftLogo from "images/ubisoft.png";
import cdProjLogo from "images/cd-projekt-red.png";
import ISponsor from "@/types/iSponsor";

const sponsors: ISponsor[] = [
  {
    name: "Activision",
    url: "https://www.activision.com/",
    logo: activisionLogo,
    description: "Activision Blizzard logo",
    class: "logo__wide",
  },
  {
    name: "Rockstar Games",
    url: "https://www.rockstargames.com/",
    logo: rockstarLogo,
    description: "Rockstar Games logo",
    class: "logo__small",
  },
  {
    name: "Ubisoft",
    url: "https://www.ubisoft.com/",
    logo: ubisoftLogo,
    description: "Ubisoft logo",
    class: "logo__small",
  },
  {
    name: "CD Projekt Red",
    url: "https://en.cdprojektred.com/",
    logo: cdProjLogo,
    description: "CD Projekt Red logo",
    class: "logo__wide",
  },
];

export default sponsors;
