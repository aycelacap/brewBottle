import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";


const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    afterWelcomeMessage: "Sign into your brewBottle member account",
    formType: "Login",
    buttonMessage: "SIGN IN",

    navLink: (
      <p>
        Don't have an account yet? <Link to="/signup" className="session-link">Sign Up</Link>
      </p>
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
