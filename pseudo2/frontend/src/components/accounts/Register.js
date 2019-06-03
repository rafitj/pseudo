import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import { createProfile } from "../../actions/profiles";
import { close_register, open_register } from "../../actions/register_modal";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: "",
    redirect: false
  };

  renderContent ()  {
    const { username, email, password, password2 } = this.state;
    return (
<Fragment>
          <form className = "register-form" onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
                placeholder = "Username"
              />
            </div>
            <div className="form-group">
               <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
                placeholder = "Email"
              />
            </div>
            <div className="form-group">
                <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
                placeholder = "Password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
                placeholder = "Password"
              />
            </div>
            <div className="form-group">
              <button type="submit" className="login_button">
                <span className="login_button_text">Sign-Up</span>
              </button>
            </div>
          </form>
      </Fragment>
    );
  }

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    }
    else {
      const newUser = {
        username,
        password,
        email
      };
      this.props.register(newUser);
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated){
      this.props.close_register()
    }
    const { redirect } = this.state;
    if (redirect) {
      this.props.close_register()
      return <Redirect to='/profile/edit'/>;
    }
    else {
      return ( this.renderContent() );
    }
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});



export default connect(
  mapStateToProps,
  { register, close_register, createProfile, open_register, createMessage }
)(Register);
