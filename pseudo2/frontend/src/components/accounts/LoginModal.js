import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import { social_login } from "../../actions/socialauth";
import { connect } from "react-redux";
import { close_login, open_login } from "../../actions/login_modal";
import { open_register, close_register } from '../../actions/register_modal';
class LoginModal extends React.Component {
  render() {
     const clickSignUp = () => {
            this.props.close_login()
            this.props.open_register()
        }
      return (
        <Modal
          show = {this.props.show.login_modal}
          onHide = {this.props.close_login}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className = "modal_class"
        >
          <Modal.Body className="modal-body login-modal-body">
            <div className="login-modal-title">
              <h3><strong>LOGIN</strong></h3>
            </div> 
            <Login />
              <div className="or_connect_with">
                <hr /><small>OR CONNECT WITH </small><hr />
              </div>

              <div className="social-container">
                <a href="#" onClick = {this.props.social_login} className="social-button"><i className="fab fa-google"></i> &nbsp;Google </a>
                <a href="#" className="social-button"><i className="fab fa-facebook-f"></i> &nbsp;Facebook </a> 
                <a href="#" className="social-button"><i className="fab fa-twitter"></i> &nbsp;Twitter</a>
                <a href="#" className="social-button"><i className="fab fa-github"></i> &nbsp;Github</a>
              </div>


              <small className = "muted_text"> Don't have an account?</small>
              <br />
              <p onClick = {clickSignUp} className="signup-now" >Sign-Up Now!</p>
          </Modal.Body>
        </Modal>
      );
  }
}

const mapStateToProps = state => ({
  loginModalShow: state.loginModal
});

export default connect(mapStateToProps, {social_login, open_register, close_register, open_login, close_login})(LoginModal);
