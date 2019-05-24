import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../../actions/auth';
import PseudoLogo from '../../../static/frontend/assets/PseudoLogo.png';
import LoginModal from '../accounts/LoginModal';
import RegisterModal from '../accounts/RegisterModal';

class Header extends React.Component{
  constructor(props) {
    super(props)
    this.state = { loginModalShow: false, registerModalShow: false, };
  }
  render(){
    let loginModalClose = () => this.setState({ loginModalShow: false });
    let registerModalClose = () => this.setState({ registerModalShow: false });
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
    const login_modal_click = () => {
        this.setState({ loginModalShow: true});
    }
    const register_modal_click = () => {
        this.setState({ registerModalShow: true});
    }

    const guestLinks = (
      <Fragment>
        <div onClick = {login_modal_click} className="nav-item nav-link show-login">
            <i className="fas fa-sign-in-alt"></i> Login
        </div>
        <div onClick = {register_modal_click}  className="navlistlast nav-item nav-link">
           <i className="fas fa-sign-in-alt"></i> Register
         </div>
      </Fragment>
    );
    return (
      <Fragment>
          <LoginModal show={this.state.loginModalShow} onHide={loginModalClose}/>
          <RegisterModal show={this.state.registerModalShow} onHide={registerModalClose}/>
          <nav className="navbar navbar-expand-md" >
              <Link to = '/' className="nav-item nav-link" >
                  <img className = "nav-logo" src = {PseudoLogo} alt = "nav-log" />
              </Link>
              <Link className="nav-item nav-anchor nav-link" to="/discover"> <i className="fas mr-1 fa-fire"></i> Discover </Link>
              <Link className="nav-item nav-anchor nav-link" to="/follow"> <i className="fas mr-1 fa-user-friends"></i> Follow </Link>
              <Link className="nav-item nav-anchor nav-link" to="/"> <i className="fas mr-1 fa-comment-dollar"></i> Hire </Link>
              <Link className="nav-item nav-anchor nav-link" to="/"> <i className="fas mr-1 fa-question-circle"></i> About </Link>

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
  auth: state.auth
});
export default connect(mapStateToProps, {logout})(Header);
