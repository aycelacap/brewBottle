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
      <div className="dropdown">
          <Link id="left-nav" to="/products">SHOP
          <button className="dropbtn"></button>
          <div className="dropdown-content">
            <a href="/">hi</a>
            <a href="/">hello</a>
            <a href="/">hey</a>
          </div>
          </Link>
          &nbsp; &nbsp;
          <Link id="left-nav" to="/">
          VISIT
            <button className="dropbtn">
            </button>
          <div className="dropdown-content">
            <a href="/">hi</a>
            <a href="/">hello</a>
            <a href="/">hey</a>
          </div>
          </Link>
          &nbsp; &nbsp;
          <Link id="left-nav" to="/">
          LEARN
            <button className="dropbtn">
            </button>
          <div className="dropdown-content">
            <a href="/">hi</a>
            <a href="/">hello</a>
            <a href="/">hey</a>
          </div>
          </Link>
      </div>
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
          <Link to="/">  
              <img
                className="navbar-logo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnzseHuGCDLVHzlbP6aD2oKcCr2F53Hhul4g&usqp=CAU"
              />
          </Link>
      <div className="drop-down-button">
          &nbsp; &nbsp;
          <Link id="left-nav" to="/products">
          SHOP
            <button className="dropbtn">
            </button>
          <div className="dropdown-content">
            <a href="/">hi</a>
            <a href="/">hello</a>
            <a href="/">hey</a>
          </div>
          </Link>
          &nbsp; &nbsp;
          <Link id="left-nav" to="/">
          VISIT
            <button className="dropbtn">
            </button>
          <div className="dropdown-content">
            <a href="/">hi</a>
            <a href="/">hello</a>
            <a href="/">hey</a>
          </div>
          </Link>
          &nbsp; &nbsp;
          <Link id="left-nav" to="/">
          LEARN
            <button className="dropbtn">
            </button>
          <div className="dropdown-content">
            <a href="/">hi</a>
            <a href="/">hello</a>
            <a href="/">hey</a>
          </div>
          </Link>
      </div>
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


// display flex, space between on the navbar = main nav
// divide left and right in separate divs, display flex

// .navbar {

// }
