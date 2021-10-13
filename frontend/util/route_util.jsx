import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) => { 
      // !loggedIn ? <Component {...props} /> : <Redirect to="/" />
      if (!loggedIn) {
        return <Component {...props} />
      } else if (loggedIn && props.location.product) {
       return <Redirect to={`/products/${props.location.product}`} />
      } else {
      //   console.log(props)
       return <Redirect to="/" />
      // console.log("helllllllooooooooo from the route utiollingjsdabgdjska bd it doesnt make sense why is this not working")
      }
    }
  }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mSTP = (state) => ({ loggedIn: Boolean(state.session.id) });

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
