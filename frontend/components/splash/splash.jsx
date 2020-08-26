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
            <img className='polaroid' src={window.espr2} alt="" />
            <img className='polaroid' src={window.sp2} alt="" />
            <img className='polaroid' src={window.sp6} alt="" />
          </div>
          <br/>
          <div className='splash-page-main-image-container'>
            <img className='polaroid' src={window.sp4} alt="" />
            <img className='polaroid' src={window.sp5} alt="" />
            <img className='polaroid' src={window.spp6} alt="" />
          </div>
        </div>

         <p className="quote">
           Motivational Coffee Quote Here
         </p>

      </div>
    );
}

export default Splash;

// other awesome photo:
// https://images.unsplash.com/photo-1585393472401-6ffc27b86a15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80