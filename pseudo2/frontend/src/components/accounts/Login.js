import React, { Component, Fragment} from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { close_login, open_login } from "../../actions/login_modal";
import Modal from '../common/Modal';
import history from '../common/history';

export class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: false
  };

  renderContent(){
    const { username, password } = this.state;
    return (
    <Fragment>
      <form className = "login-form" onSubmit={this.onSubmit}>
        <div className="first-form-group form-group">
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
            type="password"
            className="form-control"
            name="password"
            onChange={this.onChange}
            value={password}
            placeholder = "Password"
          />
        </div>
        <div className="forgot_pass_div">
            <small>
              <a className="forgot_pass" href="#">Forgot your password?</a>
            </small>
        </div>
        <div className="form-group">
          <button type="submit" className="login_button">
            <span className="login_button_text">Login</span>
          </button>
        </div>
      </form>
      </Fragment>
    );
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password)
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated){
      this.props.close_login()
    }
    const { redirect } = this.state;
    if (redirect) {
      this.props.close_login()
      return <Redirect to='/'/>;
    }
    return ( this.renderContent() );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps,{ login , close_login, open_login})(Login);
