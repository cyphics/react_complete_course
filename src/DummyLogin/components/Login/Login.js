import React, {useContext, useEffect, useReducer, useRef, useState} from 'react';

import Card from '../UI/Card/Card';
import styles from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../context/auth-context";
import InputForm from "../UI/Input/InputForm";
import authContext from "../../context/auth-context";

const emailReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.val, isValid: action.val.includes('@')}
    }
    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.includes('@')}
    }
    return {value: '', isValid: false}
}

const passwdReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {value: action.val, isValid: action.val.trim().length > 6}
    }
    if (action.type === 'INPUT_BLUR') {
        return {value: state.value, isValid: state.value.trim().length > 6}
    }
    return {value: '', isValid: false}
}

const Login = (props) => {
    const ctx = useContext(AuthContext);
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '', isValid: false
    });
    const [passwdState, dispatchPasswd] = useReducer(passwdReducer, {
        value: '', isValid: false
    })

    const {isValid: emailIsValid} = emailState;
    const {isValid: passwdIsValid} = passwdState;

    useEffect(() => {
        console.log("Check form validity")
        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid && passwdIsValid);
        }, 500);
        return () => {
            console.log("Cleanup.")
            clearTimeout(identifier);
        }
    }, [emailIsValid, passwdIsValid])
    const emailChangeHandler = (event) => {
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    };

    const passwordChangeHandler = (event) => {
        dispatchPasswd({type: 'USER_INPUT', val: event.target.value})
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: 'INPUT_BLUR'})
    };

    const validatePasswordHandler = () => {
        dispatchPasswd({type: 'INPUT_BLUR'})
    };

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            ctx.onLogin(emailState.value, passwdState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
        // ctx.onLogin(emailState.value, passwdState.value);
    };

    return (
      <Card className={styles.login}>
          <form onSubmit={submitHandler}>
              <InputForm
                ref={emailInputRef}
                isValid={emailIsValid}
                label={"E-Mail"}
                type={"email"}
                id={"email"}
                value={emailState.value}
                onChangeHandler={emailChangeHandler}
                onBlurHandler={validateEmailHandler}
              />
              <InputForm
                ref={passwordInputRef}
                isValid={passwdIsValid}
                label={"Password"}
                type={"password"}
                id={"password"}
                value={passwdState.value}
                onChangeHandler={passwordChangeHandler}
                onBlurHandler={validatePasswordHandler}
              />
              <div className={styles.actions}>
                  <Button type="submit" className={styles.btn}>
                      Login
                  </Button>
              </div>
          </form>
      </Card>
    );
};

export default Login;
