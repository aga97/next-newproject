import { useState } from 'react';

export type ModalContextType = {
  modal: boolean,
  handleModal: (content: string) => void,
  modalContent: string,
};

const useModal = (): ModalContextType => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>('default context');

  const handleModal = (content: string) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, handleModal, modalContent };
};

export default useModal;
