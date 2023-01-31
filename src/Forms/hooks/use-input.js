import {useState} from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [fieldTouched, setFieldTouched] = useState(false);

    const inputIsValid = validateValue(enteredValue);
    const hasError = !inputIsValid && fieldTouched;

    const valueChangedHandler = event => {
        setEnteredValue(event.target.value);
    };

    const valueBlurHandler = event => {
        setFieldTouched(true);
    }
    const reset = () => {
        console.log('RESET')
        setEnteredValue('');
        setFieldTouched(false);
    }
    return {
        value: enteredValue,
        isValid: inputIsValid,
        hasError,
        valueChangedHandler , valueBlurHandler,
        reset
    }
};

export default useInput;