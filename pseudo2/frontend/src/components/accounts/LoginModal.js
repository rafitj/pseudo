import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import { social_login } from "../../actions/socialauth";
import { connect } from "react-redux";
import { close_login, open_login } from "../../actions/login_modal";

class LoginModal extends React.Component {
  render() {
      console.log(this.props.close_login)
      return (
        <Modal
          show = {this.props.show.login_modal}
          onHide = {this.props.close_login}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className = "modal_class"
        >
          <Modal.Header className = "login-modal-header" >
          </Modal.Header>
          <Modal.Body className="modal-body login-modal-body">
            <div className="login-modal-title">
              <h2><strong>LOGIN</strong></h2>
            </div> 
            <Login />
              <div className="or_connect_with">
                <small className = "muted_text">OR CONNECT WITH </small>
              </div>

              <div className="social-container">
                <a href="#" onClick = {this.props.social_login} className="social-button"><i className="fab fa-google"></i></a>
                <a href="#" className="social-button"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-button"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-button"><i className="fab fa-github"></i></a>
              </div>

              <hr />

              <small className = "muted_text"> Don't have an account?</small>
              <br />
              <a className="signup-now" >Sign-Up Now!</a>

          </Modal.Body>
          <Modal.Footer className = "login-modal-footer">
          </Modal.Footer>
        </Modal>
      );
  }
}

const mapStateToProps = state => ({
  loginModalShow: state.loginModal
});

export default connect(mapStateToProps, {social_login, open_login, close_login})(LoginModal);
