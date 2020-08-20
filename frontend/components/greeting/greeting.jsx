import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/">brewBottle</Link>
      &nbsp; &nbsp;
      <Link to="/">VISIT</Link>
      &nbsp; &nbsp;
      <Link to="/">LEARN</Link>
      &nbsp; &nbsp;
      <Link to="/">SUBSCRIBE</Link>
      &nbsp; &nbsp;
      <Link to="/login">SIGN IN</Link>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
      &nbsp; &nbsp;
      <Link to="/">brewBottle</Link>
      &nbsp; &nbsp;
      <Link to="/">VISIT</Link>
      &nbsp; &nbsp;
      <Link to="/">LEARN</Link>
      &nbsp; &nbsp;
      <Link to="/">SUBSCRIBE</Link>
      &nbsp; &nbsp;
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
