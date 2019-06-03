import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from "react-redux";
import { close_logout, open_logout } from "../../actions/logout_modal";
import { logout } from '../../actions/auth';

class LogoutModal extends React.Component {

  render() {
        const clickLogout = () => {
            this.props.close_logout()
            this.props.logout()
        }
      return (
        <Modal
          show = {this.props.show.logout_modal}
          onHide = {this.props.close_logout}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className = "modal_class"
        >
          <Modal.Body className="modal-body logout-modal-body">
            <div className="logout-modal-title">
              <h3><strong>ARE YOU SURE YOU WANT TO LEAVE?</strong></h3>
            </div> 
        <button  onClick = {clickLogout}  type="submit" className="logout_button">
            <span className="logout_button_text">Yes</span>
          </button>
          <button onClick = {this.props.close_logout} type="submit" className="logout_button">
            <span className="logout_button_text">No</span>
          </button>
          </Modal.Body>
        </Modal>
      );
  }
}

const mapStateToProps = state => ({
  logoutModalShow: state.logoutModal
});

export default connect(mapStateToProps, {logout, close_logout, open_logout})(LogoutModal);
