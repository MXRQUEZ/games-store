import storeLogo from "@/assets/images/GameStore_Logo.png";
import star from "@/assets/images/star.png";
import halfStar from "@/assets/images/half-star.png";
import arrow from "@/assets/images/drop_down-white.png";

interface IOtherImages {
  [image: string]: IOtherImage;
}

interface IOtherImage {
  path: string;
  description: string;
}

const otherImages: IOtherImages = {
  // header
  storeLogo: {
    path: storeLogo,
    description: "game store logo",
  },
  arrow: {
    path: arrow,
    description: "drop-down menu",
  },
  // games card
  ratingStar: {
    path: star,
    description: "one rating star",
  },
  ratingHalfStar: {
    path: halfStar,
    description: "rating half-star",
  },
};

export default otherImages;
