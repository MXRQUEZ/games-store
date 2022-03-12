import { FC, useMemo, useState } from "react";
import { v4 as getUniqueId } from "uuid";
import classes from "@/components/gamesCard/gamesCard.module.scss";
import IProduct from "@/types/iProduct";
import Button from "@/components/ui/button/button";
import useActions from "@/hooks/redux/useActions";
import { IOrderItem } from "@/types/iOrderItem";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import Roles from "@/constants/roles";
import CardEditForm from "@/components/ui/forms/modal-forms/admin/card-edit/cardEditForm";

interface IGamesCardBackProps {
  product: IProduct;
}

const GamesCardBack: FC<IGamesCardBackProps> = ({ product }) => {
  const order = useTypedSelector((state) => state.order.order);
  const [disabled, setDisabled] = useState(false);

  const { addNewOrderItem } = useActions();
  const onClickAddItem = (): void => {
    const orderItem: IOrderItem = {
      id: getUniqueId(),
      product,
      date: new Date(),
      amount: 1,
    };

    addNewOrderItem(orderItem);
    setDisabled(true);
  };

  const isDisabled = useMemo(() => !!order.find((item) => item.product.id === product.id), [order.length]);

  const userRole = useTypedSelector((state) => state.auth.user?.role);

  return (
    <div className={classes.card__back}>
      <div className={classes.card__back__top}>{product.description}</div>
      <div className={classes.card__back__bottom}>
        <p>{product.ageRating}</p>
        <div className={classes.buttons_container}>
          <Button disabled={disabled || isDisabled} text="To basket" type="submit" onClick={onClickAddItem} />
          {userRole === Roles.Admin && <CardEditForm text="Edit card" product={product} />}
        </div>
      </div>
    </div>
  );
};

export default GamesCardBack;
