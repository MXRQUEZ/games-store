import React, { FC, useEffect } from "react";
import ReactDom from "react-dom";
import classes from "./modal.module.scss";

interface IModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: FC<IModalProps> = ({ isVisible, onClose, children }) => {
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation();

  useEffect(() => {
    document.body.style.overflowY = isVisible ? "hidden" : "unset";
  }, [isVisible]);

  return ReactDom.createPortal(
    <div aria-hidden className={isVisible ? `${classes.modal} ${classes.active}` : classes.modal} onClick={onClose}>
      <div aria-hidden className={classes.modal__content} onClick={onClickHandler}>
        {children}
      </div>
    </div>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById("modal-root")!
  );
};

export default Modal;
