import React from "react";
import { Link } from "react-router-dom";

const Splash = () => {
    return (
      <div>
        <img
          className="splash-image"
          src={window.kyotoBrewBottle}
        />
        <div className='splash-page-main-container'>
          <div className='splash-page-main-image-container'>
            <img className='splash-page-img' src={window.sp1} alt="" />
            <img className='splash-page-img' src={window.sp2} alt="" />
            <img className='splash-page-img' src={window.sp3} alt="" />
          </div>

          <div className='splash-page-main-image-container'>
            <img className='splash-page-img' src={window.sp4} alt="" />
            <img className='splash-page-img' src={window.sp5} alt="" />
            <img className='splash-page-img' src={window.sp6} alt="" />
          </div>
        </div>

         

      </div>
    );
}

export default Splash;

// other awesome photo:
// https://images.unsplash.com/photo-1585393472401-6ffc27b86a15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80