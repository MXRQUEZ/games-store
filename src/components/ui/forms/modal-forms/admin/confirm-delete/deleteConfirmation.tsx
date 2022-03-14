import { FC, memo, useState } from "react";
import formClasses from "@/components/ui/forms/modal-forms/formModal.module.scss";
import confirmClasses from "./deleteConfirm.module.scss";
import Button from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";
import useActions from "@/hooks/redux/useActions";

interface IDeleteConfirmationProps {
  productId?: string | number;
  productName?: string;
  setPreviousModal: (isActive: boolean) => void;
}

const DeleteConfirmation: FC<IDeleteConfirmationProps> = ({ productId, productName, setPreviousModal }) => {
  const [isModalActive, setModalActive] = useState(false);
  const handleOpen = (): void => {
    setModalActive(true);
    setPreviousModal(false);
  };

  const onCloseOpenPrevious = (): void => {
    setPreviousModal(true);
    setModalActive(false);
  };
  const name = `"${productName}"` || "this product";
  const confirmationText = `Are you sure you want to delete ${name} from store?`;

  const { removeCard } = useActions();
  const onClickRemoveProduct = () => {
    setModalActive(false);
    productId && removeCard(productId);
  };

  return (
    <>
      <Button text="Delete" type="button" onClick={handleOpen} />
      <Modal isActive={isModalActive} onClose={onCloseOpenPrevious}>
        <form className={`${formClasses.form} ${confirmClasses.delete__confirm}`}>
          <h4 className={formClasses.title}>Delete confirmation</h4>
          <h5 className={confirmClasses.title}>{confirmationText}</h5>
          <div className={confirmClasses.confirm__buttons}>
            <button className={confirmClasses.yes__button} type="submit" onClick={onClickRemoveProduct}>
              Yes
            </button>
            <button className={confirmClasses.no__button} type="button" onClick={onCloseOpenPrevious}>
              No
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

DeleteConfirmation.defaultProps = {
  productId: undefined,
  productName: undefined,
};

export default memo(DeleteConfirmation);
