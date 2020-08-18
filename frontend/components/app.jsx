import React from "react";
// import react-router-dom links 
import { 
  Route
 } from 'react-router-dom'
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";

const App = () => (
  <div>
    <h1>brewBottle</h1>
      <Route exact path="/login" component={LogInFormContainer} />
      <Route exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
