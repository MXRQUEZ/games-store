import React, { FC, useCallback, useState } from "react";
import IProduct from "@/types/iProduct";
import cardClasses from "../adminForm.module.scss";
import formClasses from "@/components/ui/forms/modal-forms/formModal.module.scss";
import Button from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";
import Select from "@/components/ui/select/select";
import { ages, Genres, genres } from "@/constants/searchFilters";
import images from "@/constants/images";
import { productDescMaxLen } from "@/constants/constants";
import { categories } from "@/constants/categories";
import DeleteConfirmation from "@/components/ui/forms/modal-forms/admin/confirm-delete/deleteConfirmation";

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

  const onBlurSetNewImage = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <form id={cardClasses.cardEdit} className={formClasses.form}>
          <h3 className={formClasses.title}>{text}</h3>
          <div className={cardClasses.card__edit}>
            <div className={cardClasses.image__wrapper}>
              <h4 className={cardClasses.title}>Card Image</h4>
              <img className={cardClasses.product__image} src={cardImage} alt={images.defaultCardImage.description} />
            </div>
            <div className={cardClasses.information}>
              <h4 className={cardClasses.title}>Information</h4>
              <div className={cardClasses.field}>
                <label htmlFor="edit_productName">Name</label>
                <input
                  className={cardClasses.field__input}
                  id="edit_productName"
                  autoComplete="off"
                  defaultValue={product?.name}
                  onClick={onClickSelect}
                />
              </div>
              <div className={cardClasses.field}>
                <label htmlFor="edit_productGenre">Genre</label>
                <Select id="edit_productGenre" options={productGenres} defaultValue={product?.genre} />
              </div>
              <div className={cardClasses.field}>
                <label htmlFor="edit_productPrice">Price</label>
                <input
                  className={cardClasses.field__input}
                  id="edit_productPrice"
                  autoComplete="off"
                  defaultValue={product?.price.toFixed(2)}
                  onClick={onClickSelect}
                />
              </div>
              <div className={cardClasses.field}>
                <label htmlFor="edit_productImage">Image</label>
                <input
                  className={cardClasses.field__input}
                  id="edit_productImage"
                  autoComplete="off"
                  defaultValue={product?.img}
                  onBlur={onBlurSetNewImage}
                  onClick={onClickSelect}
                />
              </div>
              <div className={cardClasses.field}>
                <label htmlFor="edit_productDescription">Description</label>
                <textarea
                  className={cardClasses.field__description}
                  id="edit_productDescription"
                  autoComplete="off"
                  onClick={onClickSelect}
                  value={product?.description}
                  maxLength={productDescMaxLen}
                />
              </div>
              <div className={cardClasses.field}>
                <label htmlFor="edit_productAgeRating">Age Rating</label>
                <Select id="edit_productAgeRating" options={ages} defaultValue={product?.ageRating} />
              </div>
              <div className={cardClasses.platforms__field}>
                <label className={cardClasses.platform__label} htmlFor="edit_productPlatform">
                  Platforms
                </label>
                <ul id="edit_productPlatform">
                  <li className={cardClasses.field}>
                    <label htmlFor="edit_productPlatform-PC">PC</label>
                    <input
                      className={cardClasses.checkbox}
                      id="edit_productPlatform-PC"
                      defaultChecked={product?.categoriesId.includes(categories.pc.id)}
                      type="checkbox"
                    />
                  </li>
                  <li className={cardClasses.field}>
                    <label htmlFor="edit_productPlatform-PS">PlayStation 5</label>
                    <input
                      className={cardClasses.checkbox}
                      id="edit_productPlatform-PS"
                      type="checkbox"
                      defaultChecked={product?.categoriesId.includes(categories.playstation.id)}
                    />
                  </li>
                  <li className={cardClasses.field}>
                    <label htmlFor="edit_productPlatform-Xbox">Xbox One</label>
                    <input
                      className={cardClasses.checkbox}
                      id="edit_productPlatform-Xbox"
                      type="checkbox"
                      defaultChecked={product?.categoriesId.includes(categories.xbox.id)}
                    />
                  </li>
                </ul>
              </div>
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
