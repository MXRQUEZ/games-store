import { FC, useState } from "react";
import Container from "@/components/ui/container/container";
import classes from "./order.module.scss";
import images from "@/constants/images";
import useTypedSelector from "@/hooks/redux/useTypedSelector";
import OrderForm from "@/components/ui/forms/order/orderForm";

const Order: FC = () => {
  const orderItems = useTypedSelector((state) => state.order.order);
  const user = useTypedSelector((state) => state.auth.user);
  const [balance, setBalance] = useState<number>(user!.balance!);
  const balanceTitle = `Your current balance is ${balance.toFixed(2)}$`;

  return (
    <Container id={classes.order} title="Order">
      {orderItems.length > 0 ? (
        <OrderForm order={orderItems} balance={balance} setBalance={setBalance} />
      ) : (
        <div className={classes.no__order}>
          <h2 className={classes.title}>Your basket is empty</h2>
          <img className={classes.empty__basket} src={images.emptyBasket.path} alt={images.emptyBasket.description} />
          <p>{balanceTitle}</p>
        </div>
      )}
    </Container>
  );
};

export default Order;
