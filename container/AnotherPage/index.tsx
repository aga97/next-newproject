import { useContext } from 'react';
import styles from './Another.module.css';
import { ModalContext } from '../../components/utils/modal/modalContext';

function AnotherPage() {
  const { handleModal } = useContext(ModalContext);

  return (
    <button type="button" className={styles.class} onClick={() => handleModal('asd')}>Hi</button>
  );
}

export default AnotherPage;
