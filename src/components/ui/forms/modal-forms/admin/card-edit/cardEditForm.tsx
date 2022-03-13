import React, { FC, useCallback, useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { v4 as getUniqueId } from "uuid";
import IProduct from "@/types/iProduct";
import cardClasses from "../adminForm.module.scss";
import formClasses from "@/components/ui/forms/modal-forms/formModal.module.scss";
import Button from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";
import { Ages, ages, Genres, genres } from "@/constants/searchFilters";
import images from "@/constants/images";
import {
  allFieldsRequired,
  pricePattern,
  pricePatternMessage,
  productDescLenMessage,
  productDescMaxLen,
  productDescMinLen,
} from "@/constants/constants";
import DeleteConfirmation from "@/components/ui/forms/modal-forms/admin/confirm-delete/deleteConfirmation";
import CardInputField from "@/components/ui/forms/modal-forms/admin/card-edit/card-fields/cardInputField";
import CardSelectField from "@/components/ui/forms/modal-forms/admin/card-edit/card-fields/cardSelectField";
import CardPlatformsMenu from "@/components/ui/forms/modal-forms/admin/card-edit/card-fields/cardPlatformsMenu";
import useActions from "@/hooks/redux/useActions";

interface ICardEditProps {
  text: string;
  buttonId?: string;
  product?: IProduct;
}

type ProductEdit = Pick<IProduct, "name" | "description" | "genre" | "price" | "ageRating" | "img">;

const CardEditForm: FC<ICardEditProps> = ({ buttonId, text, product }) => {
  const {
    register,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    handleSubmit,
    reset,
    setError,
  } = useForm<ProductEdit>({
    mode: "onSubmit",
  });

  const [isModalActive, setModalActive] = useState(false);
  const [platformsId, setPlatforms] = useState<(string | number)[]>(product?.categoriesId || []);
  const handleOpen = (): void => setModalActive(true);
  const handleClose = (): void => {
    setModalActive(false);
    reset();
  };
  const productGenres = useMemo(() => genres.filter((genre) => genre !== Genres.All), [genres.length]);
  const productAges = useMemo(() => ages.filter((age) => age !== Ages.All), [ages.length]);
  const defaultCardImage = product?.img || images.defaultCardImage.path;
  const [cardImage, setCardImage] = useState<string>(defaultCardImage);

  const { addCard, updateCard } = useActions();
  const onSubmitUpdateProduct: SubmitHandler<ProductEdit> = (productCreateData: ProductEdit) => {
    if (!platformsId.length) {
      setError("name", {
        type: "manual",
        message: allFieldsRequired,
      });
      return;
    }

    const updatedProduct: IProduct = {
      id: product!.id,
      name: productCreateData.name,
      rating: product!.rating,
      ageRating: productCreateData.ageRating,
      genre: productCreateData.genre,
      categoriesId: platformsId,
      description: productCreateData.description,
      price: +productCreateData.price,
      img: productCreateData.img,
      date: product!.date,
    };
    updateCard(updatedProduct);
    setModalActive(false);
    setCardImage(defaultCardImage);
    reset();
  };

  const onSubmitCreateProduct: SubmitHandler<ProductEdit> = (productCreateData: ProductEdit) => {
    if (!platformsId.length) {
      setError("name", {
        type: "manual",
        message: allFieldsRequired,
      });
      return;
    }
    const newProduct: IProduct = {
      id: getUniqueId(),
      name: productCreateData.name,
      rating: 5,
      ageRating: productCreateData.ageRating,
      genre: productCreateData.genre,
      categoriesId: platformsId,
      description: productCreateData.description,
      price: +productCreateData.price,
      img: productCreateData.img,
      date: new Date(),
    };

    addCard(newProduct);
    setModalActive(false);
    setCardImage(defaultCardImage);
    reset();
  };

  const onBlurSetNewImage = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const imageUrl = event.target.value || defaultCardImage;
    setCardImage(imageUrl);
  };

  const onClickSelect = useCallback((event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.currentTarget.select();
  }, []);

  const errorMessage: JSX.Element | null =
    !isSubmitSuccessful && isSubmitted ? (
      <span role="alert">{errors?.price?.message || errors?.description?.message || allFieldsRequired}</span>
    ) : null;

  return (
    <>
      <Button id={buttonId} text={text} type="button" onClick={handleOpen} />
      <Modal isActive={isModalActive} onClose={handleClose}>
        <form
          className={`${formClasses.form} ${cardClasses.admin__edit_form}`}
          onSubmit={handleSubmit(product ? onSubmitUpdateProduct : onSubmitCreateProduct)}
        >
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
                max={100}
                register={register("name", {
                  required: true,
                  minLength: 1,
                })}
              />
              <CardSelectField
                title="Genres"
                productName={product?.name}
                options={productGenres}
                defaultValue={product?.genre}
                register={register("genre", {
                  required: true,
                })}
              />
              <CardInputField
                title="Price"
                productName={product?.name}
                onClick={onClickSelect}
                defaultValue={product?.price.toFixed(2)}
                register={register("price", {
                  required: true,
                  minLength: 1,
                  pattern: {
                    value: pricePattern,
                    message: pricePatternMessage,
                  },
                })}
              />
              <CardInputField
                title="Image"
                productName={product?.name}
                onClick={onClickSelect}
                defaultValue={product?.img}
                onBlur={onBlurSetNewImage}
                register={register("img", {
                  required: true,
                })}
              />
              <CardInputField
                isTextArea
                title="Description"
                productName={product?.name}
                onClick={onClickSelect}
                defaultValue={product?.description}
                maxLength={productDescMaxLen}
                register={register("description", {
                  required: true,
                  minLength: {
                    value: productDescMinLen,
                    message: productDescLenMessage,
                  },
                })}
              />
              <CardSelectField
                title="Age Rating"
                productName={product?.name}
                options={productAges}
                defaultValue={product?.ageRating}
                register={register("ageRating", {
                  required: true,
                })}
              />
              <CardPlatformsMenu
                productName={product?.name}
                platformsId={platformsId}
                productCategories={product?.categoriesId}
                setPlatforms={setPlatforms}
              />
            </div>
          </div>
          <div className={cardClasses.bottom__wrapper}>
            <div className={cardClasses.card__error}>{errorMessage}</div>
            <div className={cardClasses.buttons}>
              <Button text="Submit" />
              {product && (
                <DeleteConfirmation
                  setPreviousModal={setModalActive}
                  productId={product?.id}
                  productName={product?.name}
                />
              )}
            </div>
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
