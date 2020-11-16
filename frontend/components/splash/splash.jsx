import React from "react";
import { Link } from "react-router-dom";
import { Player } from 'video-react';

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

        {/* <Player class="bg-white shape-content z-index-1" autoplay="autoplay" loop="loop" muted="muted" src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.jpg"><source src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.webm" type="video/webm"><source src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.mp4" type="video/mp4"><source src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.ogv" type="video/ogg"></Player> */}
        <Player className="video-container" playing="true" loop="true" muted="true">
          <source src="https://blue-bottle-cms.global.ssl.fastly.net/hbhhv9rz9/video/upload/q_100/v1604951514/qovhlkl1o0mniiihvkvh.ogv" />
        </Player>

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