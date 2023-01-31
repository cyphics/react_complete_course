import {useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        hasError: nameHasError,
        valueChangedHandler: nameChangedHandler,
        valueBlurHandler: nameBlurHandler,
        isValid: nameIsValid,
        reset: resetName
    } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        hasError: emailHasError,
        valueChangedHandler: emailChangedHandler,
        valueBlurHandler: emailBlurHandler,
        isValid: emailIsValid,
        reset: resetEmail
    } = useInput(value => value.includes('@'));

    let formIsValid = false;

    if (nameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        if (!nameIsValid || !emailIsValid) {
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);
        resetName();
        resetEmail();
    };

    const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

    return (
      <form onSubmit={formSubmissionHandler}>
          <div className={nameInputClasses}>
              <label htmlFor='name'>Your Name</label>
              <input
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                value={enteredName}
                type='text'
                id='name'/>
              {nameHasError && <p className={"error-text"}>Name must not be empty</p>}
          </div>
          <div className={emailInputClasses}>
              <label htmlFor='email'>Your email</label>
              <input
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                value={enteredEmail}
                type='text'
                id='email'/>
              {emailHasError && <p className={"error-text"}>Email is not valid.</p>}
          </div>
          <div className="form-actions">
              <button disabled={!formIsValid}>Submit</button>
          </div>
      </form>
    );
};

export default SimpleInput;
