import { FC, useEffect, useState } from "react";
import { IOrderItem } from "@/types/iOrderItem";
import classes from "./order.module.scss";
import Button from "@/components/ui/button/button";
import useActions from "@/hooks/redux/useActions";
import OrderItem from "@/components/ui/forms/order/orderItem";

interface IOrderFormProps {
  order: IOrderItem[];
  balance: number;
  setBalance: (newBalance: number) => void;
}

const OrderForm: FC<IOrderFormProps> = ({ order, balance, setBalance }) => {
  const { clearOrder } = useActions();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const balanceTitle = `Your balance: ${balance.toFixed(2)}$`;
  const totalPriceTitle = `Total price: ${totalPrice.toFixed(2)}$`;
  const buyBtnDisabled = balance < totalPrice;

  const onClickBuy = (): void => {
    const confirmText = "Are you sure you want to buy?";
    if (window.confirm(confirmText)) {
      clearOrder();
      setBalance(balance - totalPrice);
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    let initialTotalPrice = 0;
    order.forEach((orderItem) => {
      initialTotalPrice += orderItem.product.price;
    });
    setTotalPrice(initialTotalPrice);
  }, []);

  return (
    <form>
      <div className={classes.table}>
        <div className={classes.header}>
          <h3>Name</h3>
          <h3>Platform</h3>
          <h3>Order Date</h3>
          <h3>Amount</h3>
          <h3>Price</h3>
        </div>
        {order.map((orderItem) => {
          const key = `${orderItem.product.id}_order`;
          return <OrderItem key={key} orderItem={orderItem} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />;
        })}
      </div>
      <div className={classes.totals}>
        <span>{totalPriceTitle}</span>
        <span>{balanceTitle}</span>
        <div className={classes.buy_btn__wrapper}>
          <Button id={classes.buy} type="submit" disabled={buyBtnDisabled} text="Buy" onClick={onClickBuy} />
        </div>
      </div>
    </form>
  );
};

export default OrderForm;
