import Card from "../UI/Card";
import styles from './UserList.module.css'

const UsersList = (props) => {
    const deleteHandler = (event) => {
        event.preventDefault();
        props.onDeletedItem(event.target.id);
    }
    return (
      <Card className={styles.users}>
          <ul>
              {props.users.map(user =>
                <li key={user.id} id={user.id} onClick={deleteHandler}>

                    {user.name} ({user.age} years old)
                </li>
              )}
          </ul>
      </Card>
    )

}

export default UsersList;