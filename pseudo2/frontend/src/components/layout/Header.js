import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../../actions/auth';
import PseudoLogo from '../../../static/frontend/assets/PseudoLogo.png';

class Header extends React.Component{
  render(){
    const {isAuthenticated, user} = this.props.auth;
    const authLinks = (
      <Fragment>
        <strong></strong>
          <div class="mt-1  dropdown">
            <button class="nav-logout-button nav-item nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span><i class="fas mr-1 fa-caret-square-down"></i> Rooms </span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link to = '/' className="nav-item nav-link" >
                <i className="fas mr-1 fa-door-open"></i> Enter
              </Link>
              <Link to = '/' className="nav-item nav-link" >
                  <i className="fas mr-1  fa-plus-circle"></i> Create
              </Link>
              <Link to = '/' className="nav-item nav-link" >
                  <i className="fas mr-1 fa-folder"></i> My Rooms
              </Link>
            </div>
          </div>
        <Link to = '/' className="mt-1 nav-item nav-link" >
          <i className="fas fa-user mr-1"></i> {user ? `${user.username}'s Profile` : ""}
        </Link>
        <button onClick = {this.props.logout} className="mt-1 nav-logout-button navlistlast nav-item nav-link">
          <i className="fas mr-1 fa-sign-out-alt"></i> Logout
        </button>
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <Link to = '/login' className="nav-item nav-link show-login">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
        <Link to = '/register' className="navlistlast nav-item nav-link">
           <i className="fas fa-sign-in-alt"></i> Register
         </Link>
      </Fragment>
    );
    return (
      <div>
          <nav className="navbar navbar-expand-md navbar-dark" >
              <Link to = '/login' className="nav-item nav-link" >
                  <img className = "nav-logo" src = {PseudoLogo} alt = "nav-log" />
              </Link>
              <a className="nav-item nav-anchor nav-link" href="#"> <i className="fas mr-1 fa-fire"></i> Discover </a>
              <a className="nav-item nav-anchor nav-link" href="#"> <i className="fas mr-1 fa-user-friends"></i> Follow </a>
              <a className="nav-item nav-anchor nav-link" href="#"> <i className="fas mr-1 fa-comment-dollar"></i> Hire </a>
              <a className="nav-item nav-anchor nav-link" href="#"> <i className="fas mr-1 fa-question-circle"></i> About </a>

              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                <span>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {logout})(Header);
