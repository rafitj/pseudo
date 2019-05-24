import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import { social_login } from "../../actions/socialauth";
import { connect } from "react-redux";

class LoginModal extends React.Component {
  render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
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


export default connect(null, {social_login})(LoginModal);
