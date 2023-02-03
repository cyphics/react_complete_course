import styles from './OrderForm.module.css';
import useInput from "../../../Forms/hooks/use-input";
import {useRef} from "react";

const isEmpty = value => value.trim() !== '';

const OrderForm = (props) => {
    const nameInputRef = useRef('');
    const streetInputRef = useRef('');
    const postalInputRef = useRef('');
    const cityInputRef = useRef('');

    const confirmHandler = (event) => {
        event.preventDefault();
        if (isFormValid) {
            props.onConfirm({
                name: nameValue,
                street: streetValue,
                postal: postalValue,
                city: cityValue
            })
        }
    }

    const {
        value: nameValue,
        isValid: nameValid,
        hasError: nameError,
        valueChangedHandler: nameChangedHandler,
        valueBlurHandler: nameBlurHandler,
        reset: nameReset
    } = useInput(isEmpty);

    const {
        value: streetValue,
        isValid: streetValid,
        hasError: streetError,
        valueChangedHandler: streetChangedHandler,
        valueBlurHandler: streetBlurHandler,
        reset: streetReset
    } = useInput(isEmpty);
    const {
        value: postalValue,
        isValid: postalValid,
        hasError: postalError,
        valueChangedHandler: postalChangedHandler,
        valueBlurHandler: postalBlurHandler,
        reset: postalReset
    } = useInput(isEmpty);
    const {
        value: cityValue,
        isValid: cityValid,
        hasError: cityError,
        valueChangedHandler: cityChangedHandler,
        valueBlurHandler: cityBlurHandler,
        reset: cityReset
    } = useInput(isEmpty);

    const isFormValid = nameValid && streetValid && postalValid && cityValid;

    return (
      <form className={styles["order-form"]} action="submit">
          <div>
              <div className={`${styles.control} ${nameError ? 'invalid' : ''} `}>
                  <label htmlFor="name">Name</label>
                  <input
                    ref={nameInputRef}
                    value={nameValue}
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    type="text"
                    id="name"/>
                  {nameError && <p className={styles.invalid}> Name input can't be empty</p>}
              </div>
              <div className={`${styles.control} ${streetError ? 'invalid' : ''} `}>
                  <label htmlFor="street">Address</label>
                  <input
                    ref={streetInputRef}
                    value={streetValue}
                    onChange={streetChangedHandler}
                    onBlur={streetBlurHandler}
                    type="text"
                    id='street'/>
                  {streetError && <p className={styles.invalid}> Street input can't be empty</p>}
              </div>
              <div className={`${styles.control} ${postalError ? 'invalid' : ''} `}>
                  <label htmlFor="postal">Postal code </label>
                  <input
                    ref={postalInputRef}
                    value={postalValue}
                    onChange={postalChangedHandler}
                    onBlur={postalBlurHandler}
                    type="text"
                    id='postal'/>
                  {postalError && <p className={styles.invalid}> Postal code input can't be empty</p>}
              </div>
              <div className={`${styles.control} ${cityError ? 'invalid' : ''} `}>
                  <label htmlFor="city">City</label>
                  <input
                    ref={cityInputRef}
                    value={cityValue}
                    onChange={cityChangedHandler}
                    onBlur={cityBlurHandler}
                    type="text"
                    id='city'/>
                  {cityError && <p className={styles.invalid}> City input can't be empty</p>}
              </div>
          </div>
          <div className={styles.actions}>
              <button onClick={props.onCancel}>Cancel</button>
              <button disabled={!isFormValid} onClick={confirmHandler}>Confirm</button>
          </div>
      </form>
    )
}

export default OrderForm;