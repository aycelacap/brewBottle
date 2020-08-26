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
              <Link to="/">LEARN</Link>
        </div>

        {/* right nav below */}

        <div className="right-nav">
              <Link to="/login">SIGN IN</Link>
              &nbsp;   &nbsp;
              <Link to="/">SUBSCRIBE</Link>
              &nbsp;   &nbsp;
        <i class="fas fa-shopping-cart"></i>
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
              <Link to="/">LEARN</Link>
      </div>
        {/* right nav */}

        <div className="right-nav">
      <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
      <Link to="/">SUBSCRIBE</Link>
      &nbsp;   &nbsp;
      <button className="header-button" onClick={logout}>Log Out</button>
      &nbsp;   &nbsp;
      <i class="fas fa-shopping-cart"></i>
      </div>
    </hgroup>
  );
  
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

// const Greeting = ({ currentUser, logout }) => {
//   const sessionLinks = () => (
//     <nav className="header-group">
//       <Link to="/">
//         <img
//           className="navbar-logo"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnzseHuGCDLVHzlbP6aD2oKcCr2F53Hhul4g&usqp=CAU"
//         />
//       </Link>
//       <div className="dropdown">
//           <Link id="left-nav" to="/products">SHOP
//           <button className="dropbtn"></button>
//           <div className="dropdown-content">
//             <a href="/">hi</a>
//             <a href="/">hello</a>
//             <a href="/">hey</a>
//           </div>
//           </Link>
//           &nbsp; &nbsp;
//           <Link id="left-nav" to="/">
//           VISIT
//             <button className="dropbtn">
//             </button>
//           <div className="dropdown-content">
//             <a href="/">hi</a>
//             <a href="/">hello</a>
//             <a href="/">hey</a>
//           </div>
//           </Link>
//           &nbsp; &nbsp;
//           <Link id="left-nav" to="/">
//           LEARN
//             <button className="dropbtn">
//             </button>
//           <div className="dropdown-content">
//             <a href="/">hi</a>
//             <a href="/">hello</a>
//             <a href="/">hey</a>
//           </div>
//           </Link>
//       </div>
//       &nbsp; &nbsp;
//       <Link id="right-nav" to="/">
//         SUBSCRIBE
//       </Link>
//       &nbsp; &nbsp;
//       <Link id="right-nav" to="/login">
//         SIGN IN
//       </Link>
//     </nav>
//   );


//   const personalGreeting = () => (
//     <div>
//     <hgroup className="header-group">
//           <Link to="/">  
//               <img
//                 className="navbar-logo"
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnzseHuGCDLVHzlbP6aD2oKcCr2F53Hhul4g&usqp=CAU"
//               />
//           </Link>
//       <div className="drop-down-button">
//           &nbsp; &nbsp;
//           <Link id="left-nav" to="/products">
//           SHOP
//             {/* <button className="dropbtn">
//             </button> */}
//           <div className="dropdown-content">
//             <a href="/">hi</a>
//             <a href="/">hello</a>
//             <a href="/">hey</a>
//           </div>
//           </Link>
//           &nbsp; &nbsp;
//           <Link id="left-nav" to="/">
//           VISIT
//             {/* <button className="dropbtn">
//             </button> */}
//           <div className="dropdown-content">
//             <a href="/">hi</a>
//             <a href="/">hello</a>
//             <a href="/">hey</a>
//           </div>
//           </Link>
//           &nbsp; &nbsp;
//           <Link id="left-nav" to="/">
//           LEARN
//             {/* <button className="dropbtn">
//             </button> */}
//           <div className="dropdown-content">
//             <a href="/">hi</a>
//             <a href="/">hello</a>
//             <a href="/">hey</a>
//           </div>
//           </Link>
//       </div>
//       &nbsp; &nbsp;
//       <p className="right-nav">Hi, {currentUser.first_name}!</p>
//       {/* <p className="personal-greeting">Hi, {currentUser.first_name}!</p> */}
//       &nbsp; &nbsp;
//       <Link id="right-nav" to="/">
//         SUBSCRIBE
//       </Link>
//       &nbsp; &nbsp;
//       <button className="logout-button" onClick={logout}>
//         LOG OUT
//       </button>
//     </hgroup>
      
      
//       {/* <div className="logged-in-right">
//       <Link id="right-nav" to="/">
//         SUBSCRIBE
//       </Link>
//       &nbsp; &nbsp;
//       <button className="logout-button" onClick={logout}>
//         LOG OUT
//       </button>
//       </div> */}
//     </div>
//   );


//   return currentUser ? personalGreeting() : sessionLinks();
// };

// export default Greeting;


// display flex, space between on the navbar = main nav
// divide left and right in separate divs, display flex

// this is refactoring once more
