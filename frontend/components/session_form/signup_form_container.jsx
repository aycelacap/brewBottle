import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, clearErrors } from "../../actions/session_actions";
import SignUpForm from "./sign_up_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    afterWelcomeMessage:
      "By creating an account, you will be able to manage your subscriptions",
    formType: "Signup",
    buttonMessage: "SIGN UP",
    navLink: (
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    ),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
