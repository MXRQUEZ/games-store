import React, { FC, useState } from "react";
import classes from "./order.module.scss";
import Select from "@/components/ui/select/select";
import { platforms } from "@/constants/searchFilters";
import { IOrderItem } from "@/types/iOrderItem";
import useActions from "@/hooks/redux/useActions";

interface IOrderItemProps {
  orderItem: IOrderItem;
  totalPrice: number;
  setTotalPrice: (newPrice: number) => void;
}

const OrderItem: FC<IOrderItemProps> = ({ orderItem, totalPrice, setTotalPrice }) => {
  const [amount, setAmount] = useState<number>(1);
  const { removeFromOrder } = useActions();
  const trashCan = "fa-solid fa-trash-can";
  const increment = "increment";
  const decrement = "decrement";

  const onClickRemoveItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const removeItem: IOrderItem = JSON.parse(event.currentTarget.value);
    removeFromOrder(removeItem);
    const newTotalPrice = totalPrice - orderItem.product.price * amount;
    setTotalPrice(newTotalPrice);
  };

  const onClickChangeAmount = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const newAmount = event.currentTarget.name === increment ? amount + 1 : amount - 1;
    const newTotalPrice =
      newAmount > amount ? totalPrice + orderItem.product.price : totalPrice - orderItem.product.price;
    setAmount(newAmount < 0 ? 0 : newAmount);
    setTotalPrice(newTotalPrice < 0 ? 0 : newTotalPrice);
  };

  return (
    <div className={classes.body}>
      <p>{orderItem.product.name}</p>
      <div className={classes.select__wrapper}>
        <Select
          id={orderItem.product.name}
          options={orderItem.product.categoriesId.map((categoryId) => {
            const platform = platforms.find((category) => category.id === categoryId);
            return platform!.name;
          })}
        />
      </div>
      <p>{orderItem.date.toLocaleDateString()}</p>
      <div className={classes.amount_btn__wrapper}>
        <button type="button" className={classes.btn} name={decrement} onClick={onClickChangeAmount}>
          -
        </button>
        <p>{amount}</p>
        <button type="button" className={classes.btn} name={increment} onClick={onClickChangeAmount}>
          +
        </button>
      </div>
      <p>{orderItem.product.price}$</p>
      <button type="button" className={classes.btn} value={JSON.stringify(orderItem)} onClick={onClickRemoveItem}>
        <i className={trashCan} />
      </button>
    </div>
  );
};

export default OrderItem;
