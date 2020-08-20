import React from "react";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      select_one: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
      // this.props.history.push("/");
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to brewBottle!
          <br />
          <br />
          {this.props.afterWelcomeMessage}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label className="labels">
              First Name
              <input
                type="text"
                placeholder="first name"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="login-input"
              />
            </label>
            <br />
            <label className="labels">
              Last Name
              <input
                type="text"
                placeholder="last name"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="login-input"
              />
            </label>
            <br />
            <label className="labels">
              Email Address
              <input
                type="email"
                placeholder="email address"
                value={this.state.email}
                onChange={this.update("email")}
                className="login-input"
              />
            </label>
            <br />
            <label className="labels">
              Password
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="login-input"
              />
            </label>
            <br />
            <input
              className="session-submit"
              type="submit"
              value={this.props.buttonMessage}
            />
            <br />
            <div className="if-user-or-not">{this.props.navLink}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
