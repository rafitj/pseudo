import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Register from './Register';
import { connect } from "react-redux";
import {close_register } from "../../actions/register_modal";
import { open_login } from "../../actions/login_modal";
class RegisterModal extends React.Component {
  render() {
        const clickLogin = () => {
          this.props.close_register()
          this.props.open_login()
      }
      return (
        <Modal
          show = {this.props.show.register_modal}
          onHide={this.props.close_register}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className = "modal_class"
        >
          <Modal.Body className="modal-body register-modal-body">
            <div className="register-modal-title">
              <h2><strong>REGISTER</strong></h2>
            </div>
            <Register />
            <div className="or_connect_with">
                <hr /><small>OR CONNECT WITH </small><hr />
              </div>

              <div className="social-container">
                <a href="#" onClick = {this.props.social_login} className="social-button"><i className="fab fa-google"></i> &nbsp;Google </a>
                <a href="#" className="social-button"><i className="fab fa-facebook-f"></i> &nbsp;Facebook </a> 
                <a href="#" className="social-button"><i className="fab fa-twitter"></i> &nbsp;Twitter</a>
                <a href="#" className="social-button"><i className="fab fa-github"></i> &nbsp;Github</a>
              </div>

              <small className = "muted_text"> Already have an account?</small>
              <br />
              <p onClick = {clickLogin} className="login-now" >Login Here!</p>
          </Modal.Body>

        </Modal>
      );
  }
}

const mapStateToProps = state => ({
  registerModalShow: state.registerModal
});

export default connect(mapStateToProps, {open_login,close_register})(RegisterModal);
