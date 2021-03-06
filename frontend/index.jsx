import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import { login, signup, logout } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
     
//   TESTING
  window.login = login;
  window.signup = signup;
  
//   TESTING 
    
    let store;
    if (window.currentUser) {
      const preloadedState = {
        entities: {users: { [window.currentUser.id]: window.currentUser }},
        session: { id: window.currentUser.id },
      };
      store = configureStore(preloadedState);
      delete window.currentUser;
    } else {
      store = configureStore();
    }

    window.store = store;

  ReactDOM.render(<Root store={store} />, root);
});
