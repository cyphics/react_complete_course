import React from "react";
import styles from './InputForm.module.css'

const InputForm = (props) => {

    return(
      <div
        className={`${styles.control} ${
            props.isValid === false ? styles.invalid : ''
        }`}
      >
          <label htmlFor={props.type}>{props.label}</label>
          <input
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChangeHandler}
            onBlur={props.onBlurHandler}
          />
      </div>
    )
}

export default InputForm;