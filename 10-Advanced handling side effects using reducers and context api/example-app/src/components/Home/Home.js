import React from "react";

import Button from "../UI/Button/Button.js";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button type="button" onClick={props.onLogout}>
        Logout
      </Button>
    </Card>
  );
};

export default Home;
