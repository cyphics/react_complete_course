import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import {Fragment, useRef, useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState(null);

    const errorHandler = () => {
        setError(null);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge < 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (not empty)'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater than 0)'
            });
            return;
        }
        props.addUser({
            id: Math.random().toString(),
            name: enteredName,
            age: enteredUserAge
        });
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    return (
      <Fragment>
          {error && (
            <ErrorModal
              onClick={errorHandler} title={error.title} message={error.message}
            />
          )}
          <Card className={styles.input}>
              <form onSubmit={addUserHandler}>
                  <div>
                      <label htmlFor="">Username</label>
                      <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                      />
                      <label htmlFor="">Age (Years)</label>
                      <input
                        type="number"
                        min={0} max={120} step={1}
                        ref={ageInputRef}
                      />
                  </div>
                  <div>
                      <Button onClick={addUserHandler} type={"submit"}>Add User</Button>
                  </div>
              </form>
          </Card>
      </Fragment>
    )
}

export default AddUser;
