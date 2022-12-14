import React, {useImperativeHandle, useRef} from "react";
import styles from './InputForm.module.css'

const InputForm = React.forwardRef((props, ref) => {
    const inputRef = useRef();
    const activate = () => {
        inputRef.current.focus();
    }
    useImperativeHandle(ref, () => {
        return {
            focus: activate // 'focus' is called externally, 'activate' is the corresponding internal function
        }
    })
    return (
      <div
        className={`${styles.control} ${
          props.isValid === false ? styles.invalid : ''
        }`}
      >
          <label htmlFor={props.type}>{props.label}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChangeHandler}
            onBlur={props.onBlurHandler}
          />
      </div>
    )
});

export default InputForm;