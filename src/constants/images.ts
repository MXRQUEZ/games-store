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
  defaultProfilePic: {
    path: "https://winnote.ru/wp-content/uploads/2016/01/1454222417_del_recent_avatar1.png",
    description: "user profile picture",
  },
};

export default images;
