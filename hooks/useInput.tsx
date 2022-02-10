import { useEffect, useState } from 'react';

const useInput = (validateValue: (value: string) => boolean) => {
  /* States */
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [valueIsValid, setValueIsValid] = useState(false);
  const [hasError, setHasError] = useState(false);

  /* debouncing */
  useEffect(() => {
    const identifier = setTimeout(() => {
      setValueIsValid(validateValue(enteredValue));
      setHasError(!valueIsValid && isTouched);
    }, 50);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredValue]);

  /* Event Handler*/
  const valueChangeHandler = (event: {target: HTMLInputElement}) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
