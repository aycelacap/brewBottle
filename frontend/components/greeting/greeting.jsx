import React from "react";
import { Link } from "react-router-dom";


const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnzseHuGCDLVHzlbP6aD2oKcCr2F53Hhul4g&usqp=CAU"
        />
      </Link>
        <div className="left-nav">
              <Link to="/products">SHOP</Link>
              &nbsp;   &nbsp;
              <Link to="/">VISIT</Link>
              &nbsp;   &nbsp;
              {/* <Link to="/">LEARN</Link> */}
        <a href="https://www.appacademy.io/">LEARN</a>
        </div>

        {/* right nav below */}

        <div className="right-nav">
              <Link to="/login">SIGN IN</Link>
              &nbsp;   &nbsp;
              {/* <Link to="/">SUBSCRIBE</Link> */}
        <a href="https://www.youtube.com/watch?v=djV11Xbc914">SUBSCRIBE</a>
              &nbsp;   &nbsp;
              <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        <img className='amurica' src={window.usFlag} alt="" />
        </div>
    </nav>
  );
  
  
  // once you sign in
  
  const personalGreeting = () => (
    <hgroup className="navbar">
      <Link to="/">
        <img
          className="navbar-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnzseHuGCDLVHzlbP6aD2oKcCr2F53Hhul4g&usqp=CAU"
        />
      </Link>
      <div className="left-nav">
        <Link to="/products">SHOP</Link>
              &nbsp;   &nbsp;
              <Link to="/">VISIT</Link>
              &nbsp;   &nbsp;
              {/* <Link to="/">LEARN</Link> */}
        <a href="https://www.appacademy.io/">LEARN</a>
      </div>
        {/* right nav */}

        <div className="right-nav">
      <p className="header-name">Hi, {currentUser.first_name}!</p>
      {/* <Link to="/">SUBSCRIBE</Link> */}
        <a href="https://www.youtube.com/watch?v=djV11Xbc914">SUBSCRIBE</a>
      &nbsp;   &nbsp;
      <button className="logout-button" onClick={logout}>LOG OUT</button>
      &nbsp;   &nbsp;
          <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        <img className='amurica' src={window.usFlag} alt="" />
      </div>
    </hgroup>
  );
  
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

