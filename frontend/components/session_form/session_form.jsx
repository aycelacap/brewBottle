import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    window.scrollTo(0,0)
    const user = Object.assign({}, this.state);
    // this.props.processForm(user);
    if (this.props.location.product) {
      const id = this.props.history.location.product
      this.props.history.location.product = false
      // this.props.processForm(user);
      // this.props.history.push(`products/${id}`)
      this.props.processForm(user)
      .then(() => this.props.history.push(`products/${id}`));

    } else {
      this.props.processForm(user)
      .then(() => this.props.history.push("/"))
    }
    // redirect: use history
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

  componentWillUnmount() {
    this.props.clearErrors();
  }

  // demoUser() {
  //   const demoUser = {
  //     email: "cafeaulait@brewbottle.cafe",
  //     password: "hunter12",
  //   };
  //   this.setState({
  //     email: "cafeaulait@brewbottle.cafe",
  //     password: "hunter12",
  //   });
  //   setTimeout(() => this.props.history.push("/"), 500);
  // }

  demoUser(e) {
    e.preventDefault();
    window.scrollTo(0,0)
    const demoUser = {
      email: "caffeinated@brewbottle.cafe",
      password: "hunter12",
      first_name: "Caffeinated",
      last_name: "Brew",
    };
    let { email, password, first_name, last_name} = demoUser;
    let interval = 30;
    let login = () => {
      this.props.processForm(this.state);
      this.props.history.push("/")
    }; 
    if (this.state.email !== email) {
      let inputEmail = setInterval(() => {
        if (this.state.email !== email) {
          let tempEmail = email.slice(0, this.state.email.length + 1);
          this.setState({ email: tempEmail });
        } else {
          clearInterval(inputEmail);
          fillPassword();
        }
      }, interval);
    }
    let fillPassword = () => {
      let inputPassword = setInterval(() => {
        if (this.state.password !== password) {
          let tempPassword = password.slice(0, this.state.password.length + 1);
          this.setState({ password: tempPassword });
        } else {
          clearInterval(inputPassword);
          login();
        }
      }, interval);
    };
  }

  render() {
    console.log(this.props.location.product)
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to brewBottle!
          <br />
          <br />
          {this.props.afterWelcomeMessage}
          {this.renderErrors()}
          <div className="login-form">
            <label className="labels">
              Email
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
            <div>
              <input
                className="session-submit"
                type="submit"
                value="DEMO USER"
                onClick={this.demoUser}
              />
            </div>
            <br />
            <div className="if-user-or-not">{this.props.navLink}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
