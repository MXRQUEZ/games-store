import ISponsor from "@/types/iSponsor";
import classes from "@/components/footer/footer.module.scss";

const sponsors: ISponsor[] = [
  {
    name: "Activision",
    url: "https://www.activision.com/",
    logo: "https://cdn.discordapp.com/attachments/631923587078422558/942658491930259476/activision.png",
    description: "Activision Blizzard logo",
    class: classes.sponsors_logo__wide,
  },
  {
    name: "Rockstar Games",
    url: "https://www.rockstargames.com/",
    logo: "https://cdn.discordapp.com/attachments/631923587078422558/942658492601335838/rockstar.png",
    description: "Rockstar Games logo",
    class: classes.sponsors_logo__small,
  },
  {
    name: "Ubisoft",
    url: "https://www.ubisoft.com/",
    logo: "https://cdn.discordapp.com/attachments/631923587078422558/942658506765504512/ubisoft.png",
    description: "Ubisoft logo",
    class: classes.sponsors_logo__small,
  },
  {
    name: "CD Projekt Red",
    url: "https://en.cdprojektred.com/",
    logo: "https://cdn.discordapp.com/attachments/631923587078422558/942658492244824115/cd-projekt-red.png",
    description: "CD Projekt Red logo",
    class: classes.sponsors_logo__wide,
  },
];

export default sponsors;
