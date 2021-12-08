import {
  Context, useContext, useEffect, useState,
} from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.css';
import type { ModalContextType } from './useModal';

const NormalModal = ({ modalContext }:{ modalContext: Context<ModalContextType> }) => {
  const { handleModal, modalContent } = useContext(modalContext);
  return (
    <div className={styles.ModalContainer}>
      <div role="presentation" className={styles.ModalBackground} onClick={() => handleModal('')} />
      <div className={styles.ModalWrap}>
        <button type="button" className={styles.CloseBtn} onClick={() => handleModal('')}>Close</button>
        <div className={styles.ModalContent}>
          <p className={styles.ModalContent}>{modalContent}</p>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ modalContext }:{ modalContext: Context<ModalContextType> }) => {
  const { modal } = useContext(modalContext);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser && modal) {
    return createPortal(
      <NormalModal modalContext={modalContext} />,
      document.querySelector('#modal-root')!,
    );
  } return null;
};

export default Modal;
