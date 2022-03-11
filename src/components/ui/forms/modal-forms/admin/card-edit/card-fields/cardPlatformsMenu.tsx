import React, { FC, useCallback } from "react";
import cardClasses from "@/components/ui/forms/modal-forms/admin/adminForm.module.scss";
import CardCheckboxField from "@/components/ui/forms/modal-forms/admin/card-edit/card-fields/cardCheckboxField";
import { platforms } from "@/constants/searchFilters";

interface ICardPlatformsProps {
  productName?: string;
  productCategories?: (string | number)[];
  platformsId: (string | number)[];
  setPlatforms: (newPlatforms: (string | number)[]) => void;
}

const CardPlatformsMenu: FC<ICardPlatformsProps> = ({ productName, productCategories, platformsId, setPlatforms }) => {
  const onChangeSetPlatforms = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        const newPlatforms = [...platformsId, event.target.value];
        setPlatforms(newPlatforms);
        console.log(newPlatforms);
        return;
      }

      const filteredPlatforms = platformsId.filter((platformId) => platformId !== event.target.value);
      setPlatforms(filteredPlatforms);
      console.log(filteredPlatforms);
    },
    [platformsId]
  );

  return (
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
              value={platform.id}
              defaultChecked={defaultChecked}
              productName={productName}
              onChange={onChangeSetPlatforms}
            />
          );
        })}
      </ul>
    </div>
  );
};

CardPlatformsMenu.defaultProps = {
  productName: undefined,
  productCategories: undefined,
};

export default CardPlatformsMenu;
