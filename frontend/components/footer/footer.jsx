import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-wrapper-top-section">
                    <div className="top-container">
                        <div className="account-container">
                            <div className="account-title">MY ACCOUNT</div>
                            <div className="account">
                                <Link to="/" className="account">
                                    Sign In
                  </Link>
                            </div>
                            <div className="account">Register</div>
                            <div className="account">Order Status</div>
                            <div className="account">Returns</div>
                        </div>
                    </div>
                    <div className="top-container">
                        <div className="help-container">
                            <div className="help-title">HELP</div>
                            <div className="help">Ordering</div>
                            <div className="help">Shipping</div>
                            <div className="help">Returns</div>
                            <div className="help">Sizing</div>
                            <div className="help">Our Products</div>
                        </div>
                    </div>
                    <div className="top-container">
                        <div className="about-us-container">
                            <div className="about-us-title">ABOUT US</div>
                            <div className="about">Our Story</div>
                            <div className="about">Media</div>
                            <div className="about">Investors</div>
                            <div className="about">Strategic Salers</div>
                        </div>
                    </div>
                    <div className="top-container">
                        <div className="science-of-feel-container">
                            <div className="science-title">SCIENCE OF COFFEE</div>
                            <div className="science">Product care</div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper-bottom-section">
                    <div className="bottom-container">
                        <div className="contact-us-container">
                            <div className="contact">Contact Us</div>
                            <div className="contact">Live Chat</div>
                            <div className="contact">Email Sign Up</div>
                        </div>
                    </div>

                    <div className="bottom-container">
                        <div className="careers-container">
                            <div className="career">Careers</div>
                            <div className="career">Sustainability and Social Impact</div>
                            <div className="career">Here to Be</div>
                        </div>
                    </div>

                    <div className="bottom-container">
                        <div className="gift-container">
                            <div className="gift">Gift Cards</div>
                            <div className="gift">Store Locator</div>
                            <div className="gift">Privacy Policy</div>
                            <div className="gift">California Transparency Act</div>
                            <div className="gift">Accessibility Statement</div>
                        </div>
                    </div>
                    <div className="bottom-container">
                        <div className="icons-container">
                            <div className="icons-title"></div>
                            <div className="icons">
                            </div>
                            <div className="icons">
                               {/* you can place a link tag here */}
                            </div>
                            <div className="icons">
                            {/* you can place a link tag here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer; 