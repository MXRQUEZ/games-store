import storeLogo from "@/assets/images/GameStore_Logo.png";

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
    path: storeLogo,
    description: "game store logo",
  },
};

export default images;
