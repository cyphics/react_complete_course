import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import {Fragment, useState} from "react";

const Ex1 = () => {
    const [usersList, setUsersList] = useState([
        {name: "Mark", age: 34, id: 'first'}
    ])

    const addUserHandler = (newUser) => {
        setUsersList(prevList => {
            return [newUser, ...prevList];
        })
    }

    const deleteItemHandler = userID => {
        console.log(userID)
        setUsersList(prevList => {
            return prevList.filter(user => user.id !== userID);
        })
    }

    return(
      <Fragment >
          <AddUser addUser={addUserHandler}/>
          <UsersList users={usersList} onDeletedItem={deleteItemHandler}/>
      </Fragment>

    )
}

export default Ex1;