import React from "react";
import { Link } from "react-router-dom";
import { Player } from 'video-react';
import video from "video-react/lib/components/Video";
import ReactPlayer from "react-player";
// import bluebottle from "../../../assets/images/bluebottle"
// import bluebottle from "./bluebottle.mp4";

const Splash = () => {
    return (
      <div>
        <nav className="blue-nav">
          <p>Due to the health and safety of our emplyees, orders may take longer to arrive  | <Link to="/products" className="blue-nav-link"> SHOP NOW</Link></p>
          <p>US stores now open for takeaway</p>
        </nav>
        {/* <img
          className="splash-image"
          src={window.kyotoBrewBottle}
        />

        <p className="quote-one">
          KYOTO, JAPAN
        </p> */}

        {/* <div>
          <video className="video-container" loop={true} muted={true} height="100%" width="100%">
            <source autoPlay src={bluebottle} />
          </video>
        </div> */}
        <ReactPlayer 
        url="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.ogv"
        autoPlay={true}
        playing={true}
        width="%100"
        height="%100"
        loop={true}
        muted={true}/>

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

      </div>
    );
}

export default Splash;

// other awesome photo:
// https://images.unsplash.com/photo-1585393472401-6ffc27b86a15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1308&q=80