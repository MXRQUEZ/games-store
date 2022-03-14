import { FC, memo, useState } from "react";
import buyClasses from "./buyModal.module.scss";
import formClasses from "@/components/ui/forms/modal-forms/formModal.module.scss";
import Button from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";
import { IOrderItem } from "@/types/iOrderItem";

interface IBuyModalProps {
  order: IOrderItem[];
  onBuy: () => void;
  disabled: boolean;
}

const BuyModal: FC<IBuyModalProps> = ({ order, onBuy, disabled }) => {
  const [isModalActive, setModalActive] = useState(false);
  const handleOpen = (): void => setModalActive(true);
  const handleClose = (): void => setModalActive(false);

  return (
    <>
      <div className={buyClasses.buy_btn__wrapper}>
        <Button id={buyClasses.buy} disabled={disabled} type="button" text="Buy" onClick={handleOpen} />
      </div>
      <Modal isActive={isModalActive} onClose={handleClose}>
        <form id={buyClasses.buyConfirm} className={formClasses.form} onSubmit={onBuy}>
          <h3 className={formClasses.title}>Buy Confirmation</h3>
          <h4 className={buyClasses.title}>You are gonna purchase for the following items: </h4>
          <ul className={buyClasses.items}>
            {order.map((item) => {
              const key = `${item.product.id}_confirm`;
              return <li key={key}>{item.product.name}</li>;
            })}
          </ul>
          <Button text="Confirm purchase" />
        </form>
      </Modal>
    </>
  );
};

export default memo(BuyModal);
