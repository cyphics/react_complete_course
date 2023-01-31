import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
    const {
        isValid: isNameValid,
        reset: resetName,
        isTouched: isNameTouched,
        valueChangedHandler: nameChangedHandler,
        valueBlurHandler: nameBlurHandler,
        isInputInvalid: nameInputInvalid
    } = useInput2(value => value.trim() !== '');

    const nameClass = nameInputInvalid ? 'form-control invalid' : 'form-control'

    const {
        isValid: isLastnameValid,
        reset: resetLastname,
        isTouched: isLastnameTouched,
        valueChangedHandler: lastnameChangedHandler,
        valueBlurHandler: lastnameBlurHandler,
        isInputInvalid: lastnameInputInvalid
    } = useInput2(value => value.trim() !== '');

    const lastnameClass = lastnameInputInvalid ? 'form-control invalid' : 'form-control'

    const {
        isValid: isemailValid,
        reset: resetemail,
        isTouched: isemailTouched,
        valueChangedHandler: emailChangedHandler,
        valueBlurHandler: emailBlurHandler,
        isInputInvalid: emailInputInvalid
    } = useInput2(value => value.includes('@'));

    const emailClass = emailInputInvalid ? 'form-control invalid' : 'form-control'

    const isFormValid = isemailValid && isNameValid && isLastnameValid;

    return (
      <form>
          <div className='control-group'>
              <div className={nameClass}>
                  <label htmlFor='name'>First Name</label>
                  <input
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    type='text' id='name'/>
                  {nameInputInvalid && <p>First name can't be empty</p>}
              </div>
              <div className={lastnameClass}>
                  <label htmlFor='name'>Last Name</label>
                  <input onChange={lastnameChangedHandler} onBlur={lastnameBlurHandler} type='text' id='lastname'/>
                  {lastnameInputInvalid && <p>Last name can't be empty</p>}
              </div>
          </div>
          <div className={emailClass}>
              <label htmlFor='name'>E-Mail Address</label>
              <input onChange={emailChangedHandler} onBlur={emailBlurHandler} type='email' id='email'/>
              {emailInputInvalid && <p> Email is not valid </p>}
          </div>
          <div className='form-actions'>
              <button disabled={!isFormValid}>Submit</button>
          </div>
      </form>
    );
};

export default BasicForm;
