import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../../actions/auth';
import { open_login, close_login } from '../../actions/login_modal';
import { open_register, close_register } from '../../actions/register_modal';
import PseudoLogo from '../../../static/frontend/assets/PseudoLogo.png';
import LoginModal from '../accounts/LoginModal';
import RegisterModal from '../accounts/RegisterModal';

class Header extends React.Component{
  render(){
    const {isAuthenticated, user} = this.props.auth;
    const authLinks = (
      <Fragment>
          <div className="mt-1  dropdown">
            <button className="nav-logout-button nav-item nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className = "span_class"><i className="fas mr-1 fa-caret-square-down"></i> Rooms </span>
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to = '/' className="nav-item nav-link" >
                <i className="fas mr-1 fa-door-closed"></i> Enter
              </Link>
              <Link to = '/create-room' className="nav-item nav-link" >
                  <i className="fas mr-1  fa-plus-circle"></i> Create
              </Link>
              <Link to = '/my-rooms' className="nav-item nav-link" >
                  <i className="fas mr-1 fa-folder"></i> My Rooms
              </Link>
            </div>
          </div>
        <Link to = '/profile' className="mt-1 nav-item nav-link" >
          <i className="fas fa-user mr-1"></i> {user ? `${user.username}'s Profile` : ""}
        </Link>
        <button onClick = {this.props.logout} className="mt-1 nav-logout-button navlistlast nav-item nav-link">
          <i className="fas mr-1 fa-sign-out-alt"></i> Logout
        </button>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <div onClick = {this.props.open_login} className="nav-item nav-link show-login">
            <i className="fas fa-sign-in-alt"></i> Login
        </div>
        <div onClick = {this.props.open_register} className="navlistlast nav-item nav-link">
           <i className="fas fa-sign-in-alt"></i> Register
         </div>

      </Fragment>
    );
    return (
      <Fragment>
          <LoginModal show = {this.props.loginModalShow}/>
          <RegisterModal show = {this.props.registerModalShow}/>
          <nav className="navbar navbar-expand-md" >
              <Link to = '/' className="nav-item" >
                  <img className = "nav-logo" src = {PseudoLogo} alt = "nav-log" />
              </Link>
              <Link className="nav-item" to="/discover"> <i className="fas mr-1 fa-fire"></i> Discover </Link>
              <Link className="nav-item" to="/follow"> <i className="fas mr-1 fa-user-friends"></i> Follow </Link>
              <Link className="nav-item" to="/"> <i className="fas mr-1 fa-comment-dollar"></i> Hire </Link>
              <Link className="nav-item" to="/"> <i className="fas mr-1 fa-question-circle"></i> About </Link>

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
});
export default connect(
  mapStateToProps, 
  {logout, open_register, close_register, open_login, close_login })(Header);
