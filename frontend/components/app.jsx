import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import LogInFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import GreetingContainer from "./greeting/greeting_container";
import Splash from "./splash/splash"
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <Route exact path="/" component={Splash} />
  </div>
);

export default App;

  // <div>
  //   <header>
  //     <GreetingContainer />
  //   </header>
  //   <h1>brewBottle</h1>
  //   <Route exact path="/login" component={LogInFormContainer} />
  //   <Route exact path="/signup" component={SignUpFormContainer} />
  // 
  // </div>;