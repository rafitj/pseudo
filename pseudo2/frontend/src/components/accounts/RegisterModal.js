import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';
import Register from './Register';

class RegisterModal extends React.Component {
  render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className = "register-modal-header" >
          </Modal.Header>
          <Modal.Body className="modal-body register-modal-body">
            <div className="register-modal-title">
              <h2><strong>REGISTER</strong></h2>
            </div>
            <Register />
              <div className="or_connect_with">
                <small className = "muted_text">OR CONNECT WITH </small>
              </div>

              <div className="social-container">
                <a href="#" className="social-button"><i className="fab fa-google"></i></a>
                <a href="#" className="social-button"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-button"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-button"><i className="fab fa-github"></i></a>
              </div>

              <hr />

              <small className = "muted_text"> Already have an account?</small>
              <br />
              <a className="login-now" >Login Here!</a>

          </Modal.Body>
          <Modal.Footer className = "register-modal-footer">
          </Modal.Footer>
        </Modal>
      );
  }
}


export default RegisterModal;
