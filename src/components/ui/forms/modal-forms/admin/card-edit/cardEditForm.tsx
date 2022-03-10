import React, { FC, useCallback, useState } from "react";
import IProduct from "@/types/iProduct";
import cardClasses from "../adminForm.module.scss";
import formClasses from "@/components/ui/forms/modal-forms/formModal.module.scss";
import Button from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";
import { ages, Genres, genres } from "@/constants/searchFilters";
import images from "@/constants/images";
import { productDescMaxLen } from "@/constants/constants";
import DeleteConfirmation from "@/components/ui/forms/modal-forms/admin/confirm-delete/deleteConfirmation";
import CardInputField from "@/components/ui/forms/modal-forms/admin/card-edit/card-fields/cardInputField";
import CardSelectField from "@/components/ui/forms/modal-forms/admin/card-edit/card-fields/cardSelectField";
import CardPlatformsMenu from "@/components/ui/forms/modal-forms/admin/card-edit/card-fields/cardPlatformsMenu";

interface ICardEditProps {
  text: string;
  buttonId?: string;
  product?: IProduct;
}

const CardEditForm: FC<ICardEditProps> = ({ buttonId, text, product }) => {
  const [isModalActive, setModalActive] = useState(false);
  const handleOpen = (): void => setModalActive(true);
  const handleClose = (): void => setModalActive(false);
  const productGenres = genres.filter((genre) => genre !== Genres.All);
  const defaultCardImage = product?.img || images.defaultCardImage.path;
  const [cardImage, setCardImage] = useState<string>(defaultCardImage);

  const onBlurSetNewImage = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const imageUrl = event.target.value || defaultCardImage;
    setCardImage(imageUrl);
  };

  const onClickSelect = useCallback((event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.currentTarget.select();
  }, []);

  return (
    <>
      <Button id={buttonId} text={text} type="button" onClick={handleOpen} />
      <Modal isActive={isModalActive} onClose={handleClose}>
        <form className={`${formClasses.form} ${cardClasses.admin__edit_form}`}>
          <h3 className={formClasses.title}>{text}</h3>
          <div className={cardClasses.card__edit}>
            <div className={cardClasses.image__wrapper}>
              <h4 className={cardClasses.title}>Card Image</h4>
              <img className={cardClasses.product__image} src={cardImage} alt={images.defaultCardImage.description} />
            </div>
            <div className={cardClasses.information}>
              <h4 className={cardClasses.title}>Information</h4>
              <CardInputField
                title="Name"
                productName={product?.name}
                onClick={onClickSelect}
                defaultValue={product?.name}
              />
              <CardSelectField
                title="Genres"
                productName={product?.name}
                options={productGenres}
                defaultValue={product?.genre}
              />
              <CardInputField
                title="Price"
                productName={product?.name}
                onClick={onClickSelect}
                defaultValue={product?.price.toFixed(2)}
              />
              <CardInputField
                title="Image"
                productName={product?.name}
                onClick={onClickSelect}
                defaultValue={product?.img}
                onBlur={onBlurSetNewImage}
              />
              <CardInputField
                isTextArea
                title="Description"
                productName={product?.name}
                onClick={onClickSelect}
                defaultValue={product?.description}
                maxLength={productDescMaxLen}
              />
              <CardSelectField
                title="Age Rating"
                productName={product?.name}
                options={ages}
                defaultValue={product?.ageRating}
              />
              <CardPlatformsMenu productName={product?.name} productCategories={product?.categoriesId} />
            </div>
          </div>
          <div className={cardClasses.buttons}>
            <Button text="Submit" />
            {product && <DeleteConfirmation setPreviousModal={setModalActive} productName={product?.name} />}
          </div>
        </form>
      </Modal>
    </>
  );
};

CardEditForm.defaultProps = {
  product: undefined,
  buttonId: undefined,
};

export default CardEditForm;
