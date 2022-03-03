import ICategory from "@/types/iCategory";

interface ICategories {
  [category: string]: ICategory;
}

export const categories: ICategories = {
  pc: {
    id: "pc",
    name: "PC",
    path: "pc",
    img: "https://media.discordapp.net/attachments/812670607950741554/939311033485500456/desktop-pc.png",
    description: "pc",
  },

  playstation: {
    id: "ps",
    name: "PlayStation 5",
    path: "playstation",
    img: "https://media.discordapp.net/attachments/812670607950741554/939311041685360681/Playstation.png",
    description: "playstation 5",
  },

  xbox: {
    id: "xbox",
    name: "XBox One",
    path: "xbox",
    img: "https://cdn.discordapp.com/attachments/812670607950741554/939311023951843348/XBOX.png",
    description: "xbox",
  },
};

export default categories;
