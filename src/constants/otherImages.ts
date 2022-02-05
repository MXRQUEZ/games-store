import storeLogo from "@/assets/images/GameStore_Logo.png";
import star from "@/assets/images/star.png";
import halfStar from "@/assets/images/half-star.png";
import emptyStar from "@/assets/images/empty-star.png";

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
  // games card
  ratingStar: {
    path: star,
    description: "one rating star",
  },
  ratingHalfStar: {
    path: halfStar,
    description: "rating half-star",
  },
  ratingEmptyStar: {
    path: emptyStar,
    description: "one empty rating star",
  },
};

export default otherImages;
