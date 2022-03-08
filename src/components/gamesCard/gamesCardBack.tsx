import { FC, useEffect, useState } from "react";
import classes from "@/components/gamesCard/gamesCard.module.scss";
import IProduct from "@/types/iProduct";
import Button from "@/components/ui/button/button";
import useActions from "@/hooks/redux/useActions";
import { IOrderItem } from "@/types/iOrderItem";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import Roles from "@/constants/roles";
import CardEditForm from "@/components/ui/forms/modal-forms/admin/cardEditForm";

interface IGamesCardBackProps {
  product: IProduct;
}

const GamesCardBack: FC<IGamesCardBackProps> = ({ product }) => {
  const order = useTypedSelector((state) => state.order.order);
  const [disabled, setDisabled] = useState(false);

  const { addNewOrderItem } = useActions();
  const onClickAddItem = (): void => {
    const orderItem: IOrderItem = {
      product,
      date: new Date(),
    };

    addNewOrderItem(orderItem);
    setDisabled(true);
    const itemAddedText = `${orderItem.product.name} was added to your order`;
    alert(itemAddedText);
  };

  useEffect(() => {
    setDisabled(!!order.find((item) => item.product.id === product.id));
  }, []);

  const userRole = useTypedSelector((state) => state.auth.user?.role);

  return (
    <div className={classes.card__back}>
      <div className={classes.card__back__top}>
        <p>{product.description}</p>
      </div>
      <div className={classes.card__back__bottom}>
        <p>{product.ageRating}</p>
        <div className={classes.buttons_container}>
          <Button disabled={disabled} text="To basket" type="submit" onClick={onClickAddItem} />
          {userRole === Roles.Admin && <CardEditForm text="Edit card" product={product} />}
        </div>
      </div>
    </div>
  );
};

export default GamesCardBack;
