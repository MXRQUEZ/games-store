import React, { FC, useEffect } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import classes from "./modal.module.scss";

interface IModalProps {
  visible: boolean;
  setVisible: (isActive: boolean) => void;
}

const Modal: FC<IModalProps> = ({ visible, setVisible, children }) => {
  const router = useNavigate();
  const onClose = () => {
    setVisible(false);
    router("/");
  };

  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    document.body.style.overflowY = visible ? "hidden" : "unset";
  }, [visible]);

  return ReactDom.createPortal(
    <div aria-hidden className={visible ? classes.modal__active : classes.modal} onClick={onClose}>
      <div aria-hidden className={classes.modal__content} onClick={onClickHandler}>
        {/* <button type="submit" className={classes.close__button} onClick={onClose}>
          &#10006;
        </button> */}
        {children}
      </div>
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("modal-root")!
  );
};

export default Modal;
