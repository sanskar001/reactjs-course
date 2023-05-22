import React from "react";
import styles from "./UserList.module.css";
import Card from "../UI/Card.js";

const UserList = (props) => {
  return (
    <Card className = {styles.users}>
      <ul>
        {props.users.map((user) => {
          return (<li key={user.id}>
            {user.name} ({user.age} years)
          </li>);
        })}
      </ul>
    </Card>
  );
};

export default UserList;
