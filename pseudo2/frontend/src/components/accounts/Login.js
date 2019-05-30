import React, { Component, Fragment} from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
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
        <div className="form-group">
          <label htmlFor="username"><i className="fas fa-user prefix"></i></label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={this.onChange}
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"><i className="fas fa-lock prefix"></i></label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={this.onChange}
            value={password}
          />
        </div>
        <div class="forgot_pass_div">
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
    this.setState({ redirect: true })
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { redirect } = this.state;
    console.log(redirect)
    if (redirect) {
      this.setState({ redirect: false })
      return <Redirect to='/'/>;
    }
    return (
      this.renderContent()
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps,{ login })(Login);
