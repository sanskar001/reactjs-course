import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser.js";
import UserList from "./components/Users/UserList.js";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userData) => {
    setUserList((prevUserList) => {
      return [userData, ...prevUserList];
    });
  }

  return (
    <div>
      <AddUser onAddUser = {addUserHandler}></AddUser>
      <UserList users = {userList}></UserList>
    </div>
  );
}

export default App;
