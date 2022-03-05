import { FC } from "react";
import Container from "@/components/ui/container/container";
import classes from "./order.module.scss";
import Button from "@/components/ui/button/button";
import Select from "@/components/ui/select/select";
import { platforms } from "@/constants/searchFilters";
import images from "@/constants/images";

const Order: FC = () => {
  const orderItems = [1, 2];
  const trashCan = "fa-solid fa-trash-can";
  const currentDate = new Date().toDateString();

  return (
    <Container id={classes.order} title="Order">
      {orderItems.length > 0 ? (
        <form>
          <div className={classes.table}>
            <div className={classes.header}>
              <h3>Name</h3>
              <h3>Platform</h3>
              <h3>Order Date</h3>
              <h3>Amount</h3>
              <h3>Price</h3>
            </div>
            <div className={classes.body}>
              <p>Example</p>
              <div className={classes.select__wrapper}>
                <Select id="game" options={platforms.map((category) => category.name)} />
              </div>
              <p>{currentDate}</p>
              <div className={classes.amount_btn__wrapper}>
                <button type="button" className={classes.btn}>
                  -
                </button>
                <p>5</p>
                <button type="button" className={classes.btn}>
                  +
                </button>
              </div>
              <p>100$</p>
              <button type="button" className={classes.btn}>
                <i className={trashCan} />
              </button>
            </div>
          </div>
          <div className={classes.totals}>
            <span>Total price: </span>
            <span>Your balance: </span>
            <div className={classes.buy_btn__wrapper}>
              <Button id={classes.buy} text="Buy" />
            </div>
          </div>
        </form>
      ) : (
        <div className={classes.no__order}>
          <h2 className={classes.title}>Your basket is empty</h2>
          <img className={classes.empty__basket} src={images.emptyBasket.path} alt={images.emptyBasket.description} />
        </div>
      )}
    </Container>
  );
};

export default Order;
