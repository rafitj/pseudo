import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal';

class LoginModal extends React.Component {
  render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Hey
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Loading
          </Modal.Body>
          <Modal.Footer>
            <button className = "btn" onClick={this.props.onHide}>Close</button>
          </Modal.Footer>
        </Modal>
      );
  }
}


export default LoginModal;
