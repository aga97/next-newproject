import { SyntheticEvent, useContext } from 'react';
import { ModalContext } from '../../components/utils/modal/modalContext';

import useInput from '../../hooks/useInput';
import FrontPageView from './FrontPage.view';

function FrontPage() {
  const { handleModal } = useContext(ModalContext);

  //region Inputs
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value: string) => value.trim() !== '');

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput((value: string) => value.trim() !== '');
  //endregion

  //region Handlers
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (!nameIsValid || !passwordIsValid) {
      handleModal('input is not valid, enter something to inputbox');
      return;
    }

    handleModal('2 thing all inputted');
  };
  //endregion

  //region Props To View
  const props = {
    nameInput: {
      value: enteredName,
      isValid: nameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangeHandler,
      inputBlurHandler: nameBlurHandler,
      reset: nameReset,
    },
    passwordInput: {
      value: passwordValue,
      isValid: passwordIsValid,
      hasError: passwordInputHasError,
      valueChangeHandler: passwordChangeHandler,
      inputBlurHandler: passwordBlurHandler,
      reset: passwordReset,
    },
    handleSubmit,
  };
  //endregion

  return (<FrontPageView {...props} />);
}

export default FrontPage;
