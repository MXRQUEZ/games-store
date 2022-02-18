interface IImages {
  [image: string]: IImage;
}

interface IImage {
  path: string;
  description: string;
}

const images: IImages = {
  // header
  storeLogo: {
    path: "https://cdn.discordapp.com/attachments/631923587078422558/942658507126243378/GameStore_Logo.png",
    description: "game store logo",
  },
};

export default images;
