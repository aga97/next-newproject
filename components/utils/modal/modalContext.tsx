import { createContext, ReactNode, useMemo } from 'react';
import useModal from './useModal';
import Modal from './modal';

import type { ModalContextType } from './useModal';

type Props = {
  children: ReactNode,
}

const ModalContext = createContext<ModalContextType>({} as ModalContextType);

const ModalProvider = ({ children }: Props) => {
  const { modal, handleModal, modalContent } = useModal();
  const modalValue = useMemo(() => ({
    modal,
    handleModal,
    modalContent,
  }), [modal, handleModal, modalContent]);

  return (
    <ModalContext.Provider value={modalValue}>
      <Modal modalContext={ModalContext} />
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
