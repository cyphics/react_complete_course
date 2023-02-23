import styles from './AddUser.module.css'
import {useState} from "react";
import Card from "../UI/Card";

const NewUserForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangedHandler = event => {
        setEnteredName(event.target.value);
    }
    const ageChangedHandler = event => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        const newUser = {
            id: Math.random().toString(),
            name: enteredName,
            age: +enteredAge
        }
        props.onSaveNewUser(newUser);
        setEnteredName('');
        setEnteredAge('');
    }

    return(
      <Card>
          <form onSubmit={addUserHandler}>
              <div className={styles.newUserControls}>
                  <div className={styles.newUserControl}>
                      <label htmlFor="username">Username</label>
                      <input id="username" type="text" value={enteredName} onChange={nameChangedHandler}/>
                  </div>
                  <div className={styles.newUserControl}>
                      <label htmlFor="age">Age (Years)</label>
                      <input type="number" min={0} max={120} step={1} value={enteredAge} onChange={ageChangedHandler}/>
                  </div>
              </div>
              <div className={styles.newUserControl}>
                  <button type={"submit"}>Add User</button>
              </div>
          </form>
      </Card>
    )
};

export default NewUserForm;
