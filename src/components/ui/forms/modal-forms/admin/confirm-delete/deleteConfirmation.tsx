import { FC, useState } from "react";
import formClasses from "@/components/ui/forms/modal-forms/formModal.module.scss";
import confirmClasses from "./deleteConfirm.module.scss";
import Button from "@/components/ui/button/button";
import Modal from "@/components/ui/modal/modal";

interface IDeleteConfirmationProps {
  productName?: string;
  setPreviousModal: (isActive: boolean) => void;
}

const DeleteConfirmation: FC<IDeleteConfirmationProps> = ({ productName, setPreviousModal }) => {
  const [isModalActive, setModalActive] = useState(false);
  const handleOpen = (): void => {
    setModalActive(true);
    setPreviousModal(false);
  };
  const handleClose = (): void => setModalActive(false);
  const onCloseOpenPrevious = (): void => {
    setPreviousModal(true);
    setModalActive(false);
  };
  const name = `"${productName}"` || "this product";
  const confirmationText = `Are you sure you want to delete ${name} from store?`;

  return (
    <>
      <Button text="Delete" type="button" onClick={handleOpen} />
      <Modal isActive={isModalActive} onClose={onCloseOpenPrevious}>
        <form id={confirmClasses.deleteConfirm} className={formClasses.form}>
          <h4 className={formClasses.title}>Delete confirmation</h4>
          <h5 className={confirmClasses.title}>{confirmationText}</h5>
          <div className={confirmClasses.confirm__buttons}>
            <button className={confirmClasses.yes__button} type="submit" onClick={handleClose}>
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
  productName: undefined,
};

export default DeleteConfirmation;
