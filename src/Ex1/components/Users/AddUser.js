import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import {Fragment, useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState(0);
    const [error, setError] = useState(null);

    const errorHandler = () => {
        setError(null);
    }
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge < 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (not empty)'
            });
            return <ErrorModal title={"ERROR"} message={"A message"}></ErrorModal>
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (greater than 0)'
            });
        }
        props.addUser({
            id: Math.random().toString(),
            name: enteredUsername,
            age: enteredAge
        });
        setEnteredAge(0);
        setEnteredUsername('');
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
                      <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>
                      <label htmlFor="">Age (Years)</label>
                      <input type="number" min={0} max={120} step={1} value={enteredAge} onChange={ageChangeHandler}/>
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
