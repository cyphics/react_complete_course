import {useState} from "react";

const useInput2 = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const isValid = validateValue(enteredValue);
    const isInputInvalid = !isValid && isTouched;

    const valueChangedHandler = (event) => {
        setEnteredValue(event.target.value);
        setIsTouched(true);
    }
    const valueBlurHandler = event => {
        setIsTouched(true);
    }
    const reset = () => {
        setIsTouched(false);
        setEnteredValue('');
    }

    return {
        isValid,
        isTouched,
        isInputInvalid,
        valueChangedHandler,
        valueBlurHandler,
        reset,
    }
}

export default useInput2;