import {useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);

    const nameIsValid = enteredName.trim() !== '';
    const nameInputInvalid = !nameIsValid && nameTouched;

    const emailIsValid = enteredEmail.includes('@') && enteredEmail.includes('.');
    const emailInputInvalid = !emailIsValid && emailTouched;

    let formIsValid = false;

    if (nameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = event => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = event => {
        setNameTouched(true);
    }

    const emailInputChangeHandler = event => {
        setEnteredEmail(event.target.value);
    }

    const emailInputBlurHandler = event => {
        setEmailTouched(true);
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        setNameTouched(true);
        setEmailTouched(true);
        if (!nameIsValid || !emailIsValid) {
            return;
        }
        console.log(enteredName);
        console.log(enteredEmail);
        setEnteredName('');
        setNameTouched(false);
        setEnteredEmail('');
        setEmailTouched(false);
    };

    const nameInputClasses = nameInputInvalid ? 'form-control invalid' : 'form-control';
    const emailInputClasses = emailInputInvalid ? 'form-control invalid' : 'form-control';

    return (
      <form onSubmit={formSubmissionHandler}>
          <div className={nameInputClasses}>
              <label htmlFor='name'>Your Name</label>
              <input onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} type='text' id='name'/>
              {nameInputInvalid && <p className={"error-text"}>Name must not be empty</p>}
          </div>
          <div className={emailInputClasses}>
              <label htmlFor='email'>Your email</label>
              <input onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} type='text' id='email'/>
              {emailInputInvalid && <p className={"error-text"}>Email is not valid.</p>}
          </div>
          <div className="form-actions">
              <button disabled={!formIsValid}>Submit</button>
          </div>
      </form>
    );
};

export default SimpleInput;
