import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-wrapper">
                <div className="footer-wrapper-top-section">
                    <div className="top-container">
                        <div className="account-container">
                            <div className="account-title"><i className="fab fa-github"></i></div>

                            <div className="account">
                            </div>
                        </div>
                    </div>
                    <div className="top-container">
                        <div className="help-container">
                            <div className="help-title"><a href="https://angel.co/u/ayce-lacap" ></a>
                                <i className="fab fa-angellist"></i></div>
                        </div>
                    </div>
                    <div className="top-container">
                        <div className="about-us-container">
                            <div className="about-us-title"><a href="https://github.com/aycelacap" ></a>
                                
                                <i className="fas fa-user-circle"></i></div>

                        </div>
                    </div>
                    <div className="top-container">
                        <div className="science-of-feel-container">
                            <div className="science-title"> <a href="https://www.linkedin.com/in/ayce-lacap-00/"><i className="fab fa-linkedin"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="footer-wrapper-bottom-section">


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
                            <div className="icons">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer; 