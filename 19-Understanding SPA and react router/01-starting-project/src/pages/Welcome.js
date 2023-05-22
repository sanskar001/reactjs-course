import { Route } from "react-router-dom";
import React from "react";

// Chapter: Working with Nested Routes
/*
- We can define route at wherever we want, may be inside nested component.
- Whenever <Welcome/> page is active then nested <Route/> will get active.
*/

const Welcome = (props) => {
  return (
    <section>
      <h1>The Welcome page.</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};

export default Welcome;
