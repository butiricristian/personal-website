import styles from "../../styles/Modal.module.css";
import clsx from "clsx";
import Overlay from "./Overlay";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CloseButton from "./CloseButton";

export default function Modal({
  children,
  type = "lg",
  showModal,
  setShowModal,
  style,
  ...props
}) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <>
      <Overlay
        showOverlay={showModal}
        setShowOverlay={setShowModal}
        zIndex={200}
      />
      <div
        className={clsx(styles.modal, styles[type])}
        style={{ display: showModal ? "flex" : "none", ...style }}
      >
        <div className={styles.closeRow}>
          <CloseButton onClick={() => setShowModal(false)} />
        </div>
        <div className={styles.modalContent}>{children}</div>
      </div>
    </>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
