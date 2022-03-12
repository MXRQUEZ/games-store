import { FC, memo, useMemo, useState } from "react";
import { IOrderItem } from "@/types/iOrderItem";
import classes from "./order.module.scss";
import useActions from "@/hooks/redux/useActions";
import OrderItem from "@/components/ui/forms/order/orderItem";
import BuyModal from "@/components/ui/forms/modal-forms/buy-order/buyModal";

interface IOrderFormProps {
  order: IOrderItem[];
  balance: number;
  setBalance: (newBalance: number) => void;
}

const OrderForm: FC<IOrderFormProps> = ({ order, balance, setBalance }) => {
  const initialTotalPrice = useMemo(() => {
    let price = 0;
    order.forEach((item) => {
      price += item.product.price * item.amount;
    });
    return price;
  }, []);

  const { clearOrder } = useActions();
  const [totalPrice, setTotalPrice] = useState<number>(initialTotalPrice);
  const balanceTitle = `Your balance: ${balance.toFixed(2)}$`;
  const totalPriceTitle = `Total price: ${Math.abs(totalPrice).toFixed(2)}$`;
  const buyBtnDisabled = balance < totalPrice;

  const onBuy = (): void => {
    clearOrder();
    setBalance(balance - totalPrice);
    setTotalPrice(0);
  };

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
          const key = `${orderItem.product!.id}_order`;
          return <OrderItem key={key} orderItem={orderItem} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />;
        })}
      </div>
      <div className={classes.totals}>
        <span>{totalPriceTitle}</span>
        <span>{balanceTitle}</span>
        <BuyModal disabled={buyBtnDisabled} onBuy={onBuy} order={order} />
      </div>
    </form>
  );
};

export default memo(OrderForm);
