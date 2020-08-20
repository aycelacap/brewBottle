import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="header-group">
      <Link to="/">
        <img
          className="navbar-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnzseHuGCDLVHzlbP6aD2oKcCr2F53Hhul4g&usqp=CAU"
        />
      </Link>
      <Link id="left-nav" to="/">
        SHOP
      </Link>
      &nbsp; &nbsp;
      <Link id="left-nav" to="/">
        VISIT
      </Link>
      &nbsp; &nbsp;
      <Link id="left-nav" to="/">
        LEARN
      </Link>
      &nbsp; &nbsp;
      <Link id="right-nav" to="/">
        SUBSCRIBE
      </Link>
      &nbsp; &nbsp;
      <Link id="right-nav" to="/login">
        SIGN IN
      </Link>
    </nav>
  );


  const personalGreeting = () => (
    <hgroup className="header-group">
      <img
        className="navbar-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnzseHuGCDLVHzlbP6aD2oKcCr2F53Hhul4g&usqp=CAU"
      />
      &nbsp; &nbsp;
      <Link id="left-nav" to="/">
        brewBottle
      </Link>
      &nbsp; &nbsp;
      <Link id="left-nav" to="/">
        VISIT
      </Link>
      &nbsp; &nbsp;
      <Link id="left-nav" to="/">
        LEARN
      </Link>
      &nbsp; &nbsp;
      <p id="right-nav">Hi, {currentUser.first_name}!</p>
      &nbsp; &nbsp;
      <Link id="right-nav" to="/">
        SUBSCRIBE
      </Link>
      &nbsp; &nbsp;
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );


  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
