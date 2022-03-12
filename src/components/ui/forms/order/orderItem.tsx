import React, { FC, useCallback, useState } from "react";
import classes from "./order.module.scss";
import Select from "@/components/ui/select/select";
import { platforms } from "@/constants/searchFilters";
import { IOrderItem } from "@/types/iOrderItem";
import useActions from "@/hooks/redux/useActions";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import debounce from "@/shared/utils/helpers/debounce";

interface IOrderItemProps {
  orderItem: IOrderItem;
  totalPrice: number;
  setTotalPrice: (newPrice: number) => void;
}

const OrderItem: FC<IOrderItemProps> = ({ orderItem, totalPrice, setTotalPrice }) => {
  const [amount, setAmount] = useState<number>(orderItem.amount);
  const order = useTypedSelector((state) => state.order.order);
  const { removeFromOrder } = useActions();
  const trashCan = "fa-solid fa-trash-can";
  const increment = "increment";
  const decrement = "decrement";

  const onClickRemoveItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const removeItemId: string = event.currentTarget.value;
    const removeItem = order.find((item) => item.id === removeItemId);
    if (removeItem) {
      removeFromOrder(removeItem);
      const newTotalPrice = totalPrice - orderItem.product.price * amount;
      setTotalPrice(newTotalPrice);
    }
  };

  const { changeOrderItemAmount } = useActions();
  const debounceDelayMS = 1000;
  const debounceOnChange: (item: IOrderItem) => void = debounce(changeOrderItemAmount, debounceDelayMS);
  const debounceOnChangeCallback = useCallback((item: IOrderItem) => {
    debounceOnChange(item);
  }, []);

  const onClickChangeAmount = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    const newAmount = event.currentTarget.name === increment ? amount + 1 : amount - 1;
    if (newAmount < 0) return;
    const newTotalPrice =
      newAmount > amount ? totalPrice + orderItem.product.price : totalPrice - orderItem.product.price;
    setAmount(newAmount);
    setTotalPrice(newTotalPrice);
    debounceOnChangeCallback({ id: orderItem.id, product: orderItem.product, amount: newAmount, date: orderItem.date });
  };

  return (
    <div className={classes.body}>
      <p>{orderItem.product.name}</p>
      <div className={classes.select__wrapper}>
        <Select
          id={orderItem.product!.name}
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
      <button type="button" className={classes.btn} value={orderItem.id} onClick={onClickRemoveItem}>
        <i className={trashCan} />
      </button>
    </div>
  );
};

export default OrderItem;
