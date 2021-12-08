import { SyntheticEvent, useContext } from 'react';
import { ModalContext } from '../../components/utils/modal/modalContext';

import useInput from '../../hooks/useInput';
import styles from './FrontPage.module.css';

function FrontPage() {
  const { handleModal } = useContext(ModalContext);

  //region Inputs

  const nameInput = useInput((value: string) => value.trim() !== '');
  const passwordInput = useInput((value: string) => value.trim() !== '');

  //endregion

  //region Handlers
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!nameInput.isValid || !passwordInput.isValid) {
      handleModal('input is not valid, enter something to inputbox');
      return;
    }

    handleModal('2 thing all inputted');
  };
  //endregion

  return (
    <div className={styles.FrontContainer}>
      <div className={styles.FrontContent}>
        <p className={styles.FrontContext}>
          THIS IS FRONT PAGE
        </p>
        <p className={styles.FrontContext}>
          TODO 1 : Add Backend (nextjs)
        </p>
        <p className={styles.FrontContext}>
          TODO 2 : Add DB (mongoDB or mysql)
        </p>
        <p className={styles.FrontContext}>
          TODO 3 : Add Chat (socket.io)
        </p>
        <p className={styles.FrontContext}>
          TODO 4 : Add Auth(sign in/out)
        </p>
        <div>
          <input
            type="text"
            value={nameInput.value}
            onChange={nameInput.valueChangeHandler}
            onBlur={nameInput.inputBlurHandler}
          />
        </div>
        <div>
          <input
            type="text"
            value={passwordInput.value}
            onChange={passwordInput.valueChangeHandler}
            onBlur={passwordInput.inputBlurHandler}
          />
        </div>
        <button type="submit" className={styles.FrontBtn} onClick={handleSubmit}>SUBMIT</button>
      </div>
    </div>
  );
}

export default FrontPage;
