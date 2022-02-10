import {SyntheticEvent, useContext, useEffect, useState} from 'react';
import { useRouter } from 'next/router';

import { ModalContext } from '../../components/utils/modal/modalContext';
import useInput from '../../hooks/useInput';
import Filter from './components/filter';

import styles from './FrontPage.module.css';

function FrontPage() {
  const { handleModal } = useContext(ModalContext);
  const router = useRouter();

  //region Inputs

  const nameInput = useInput((value: string) => value.trim() !== '');
  const passwordInput = useInput((value: string) => value.trim() !== '');

  //endregion

  const [query, setQuery] = useState<any>('');
  useEffect(() => {
    // console.log(router.);
    console.log(router.query);
    setQuery(router.query);
  }, [router.query]);

  //region Handlers
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!nameInput.isValid || !passwordInput.isValid) {
      handleModal('input is not valid, enter something to inputbox');
      return;
    }

    handleModal('2 thing all inputted');
  };

  const handleFilterSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    router.push('?location=true');
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
        <Filter label="location1" isTrue={query?.location} />
        {/*<Filter label="location2" />*/}
        <button type="submit" className={styles.FrontBtn} onClick={handleFilterSubmit}>APPLY</button>
        { query?.location }
      </div>
    </div>
  );
}

export default FrontPage;
