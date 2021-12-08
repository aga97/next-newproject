import { SyntheticEvent, useEffect } from 'react';
import { router } from 'next/client';
import styles from './FrontPage.module.css';

type inputTypes = {
  value: string,
  isValid: boolean,
  hasError: boolean,
  valueChangeHandler: (event: {target: HTMLInputElement}) => void,
  inputBlurHandler: () => void,
  reset: () => void,
}

type Props = {
  nameInput: inputTypes,
  passwordInput: inputTypes,
  handleSubmit: (event: SyntheticEvent) => void,
}

const FrontPageView = (props: Props) => {
  const {
    nameInput,
    passwordInput,
    handleSubmit,
  } = props;

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
};

export default FrontPageView;
