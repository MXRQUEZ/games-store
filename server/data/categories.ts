import xbox from "images/XBOX.png";
import playStation from "images/Playstation.png";
import desktop from "images/desktop-pc.png";
// eslint-disable-next-line import/no-extraneous-dependencies
import mockServerHelper from "webpack-mock-server/lib/mockServerHelper";
import ICategory from "@/types/iCategory";

interface ICategories {
  [category: string]: ICategory;
}

const categories: ICategories = {
  pc: {
    name: "PC",
    id: mockServerHelper.getUniqueIdInt(),
    img: desktop,
    description: "pc",
  },

  playstation: {
    name: "PlayStation 5",
    id: mockServerHelper.getUniqueIdInt(),
    img: playStation,
    description: "playstation 5",
  },

  xbox: {
    name: "XBox One",
    id: mockServerHelper.getUniqueIdInt() + 5,
    img: xbox,
    description: "xbox one",
  },
};

export default categories;
