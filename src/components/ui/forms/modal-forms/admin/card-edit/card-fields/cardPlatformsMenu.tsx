import { FC } from "react";
import cardClasses from "@/components/ui/forms/modal-forms/admin/adminForm.module.scss";
import CardCheckboxField from "@/components/ui/forms/modal-forms/admin/card-edit/card-fields/cardCheckboxField";
import { platforms } from "@/constants/searchFilters";

interface ICardPlatformsProps {
  productName?: string;
  productCategories?: (string | number)[];
}

const CardPlatformsMenu: FC<ICardPlatformsProps> = ({ productName, productCategories }) => (
  <div className={cardClasses.platforms__field}>
    <span className={cardClasses.platform__label}>Platforms</span>
    <ul>
      {platforms.map((platform) => {
        const defaultChecked = productCategories?.includes(platform.id);
        const key = `checkbox_${platform.name}-${productName}`;
        return (
          <CardCheckboxField
            key={key}
            label={platform.name}
            defaultChecked={defaultChecked}
            productName={productName}
          />
        );
      })}
    </ul>
  </div>
);

CardPlatformsMenu.defaultProps = {
  productName: undefined,
  productCategories: undefined,
};

export default CardPlatformsMenu;
