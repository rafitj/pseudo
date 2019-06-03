import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { open_logout, close_logout } from '../../actions/logout_modal';
import { open_login, close_login } from '../../actions/login_modal';
import { open_register, close_register } from '../../actions/register_modal';
import PseudoLogo from '../../../static/frontend/assets/PseudoLogo.png';
import LoginModal from '../accounts/LoginModal';
import LogoutModal from '../accounts/LogoutModal';
import RegisterModal from '../accounts/RegisterModal';

class Header extends React.Component{
  render(){
    const {isAuthenticated, user} = this.props.auth;
    const authLinks = (
      <Fragment>
        <Link to = '/room-dashboard' className="mt-1 nav-item nav-link" >
          Rooms
        </Link>
        <Link to = '/profile' className="mt-1 nav-item nav-link" >
          {user ? `${user.username}'s Profile` : ""}
        </Link>
        <button onClick = {this.props.open_logout} className="mt-1 nav-logout-button navlistlast nav-item nav-link">
           Logout
        </button>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <div onClick = {this.props.open_login} className="nav-item nav-link show-login">
             Login
        </div>
        <div onClick = {this.props.open_register} className="navlistlast nav-item nav-link">
           Register
         </div>

      </Fragment>
    );
    return (
      <Fragment>
          <LogoutModal show = {this.props.logoutModalShow}/>
          <LoginModal show = {this.props.loginModalShow}/>
          <RegisterModal show = {this.props.registerModalShow}/>
          <nav className="navbar navbar-expand-md" >
              <Link to = '/' className="nav-item" >
                  <img className = "nav-logo" src = {PseudoLogo} alt = "nav-log" />
              </Link>
              <Link className="nav-item" to="/discover"> Discover </Link>
              <Link className="nav-item" to="/follow">  People </Link>
              <Link className="nav-item" to="/"> Hire </Link>
              <Link className="nav-item" to="/">  About </Link>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span className="span_class">
                  <i className="fas fa-bars"></i>
                </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarToggle">

                <div className="navbar-nav mr-auto">
                </div>
                <div className="navbar-nav">
                  {isAuthenticated ? authLinks : guestLinks}
                </div>
              </div>
          </nav>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  loginModalShow : state.login_modal,
  registerModalShow : state.register_modal,
  logoutModalShow: state.logout_modal
});
export default connect(
  mapStateToProps, 
  {open_logout, close_logout, open_register, close_register, open_login, close_login })(Header);
