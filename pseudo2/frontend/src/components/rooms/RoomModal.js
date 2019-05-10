import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import UserHeader from '../common/UserHeader';
class RoomModal extends React.Component {
  render() {
    if (this.props.room === null || this.props.room === undefined){
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
    else {
      const {creator, title, summary, room_image} = this.props.room;
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className = "room_modal_header">
              <button className = "close mr-1" onClick={this.props.onHide}><i class="fas fa-times"></i></button>
           </Modal.Header>
          <Modal.Body className = "room_modal_body">
            <div class="container">
                <div class="row">

                  <div class="room_modal_left col-1">
                      <i class="fas fa-caret-left"></i>
                  </div>
                  <div class="room_modal_author col-3">
                    <img class="rounded-circle" src={room_image} alt="" />
                    <h4 class="mt-2"><small class="mb-1">Created By:</small> <UserHeader userId = {creator} userProperty="username"/>
                    </h4>
                   </div>

                  <div class=" col-7">
                    <h2 class="room_modal_title">{title}</h2>
                      <div class="room_modal_tags">

                      </div>
                    <div class="room_modal_summary">
                      {summary}
                    </div>
                    <div class="room_modal_date">
                      Date Created
                    </div>
                    <br />
                    <div class="room_modal_stats_and_button">
                      <div class="container">
                        <div class="row">
                          <div class="room_modal_stats col-6">
                            <i class="fas fa-comment"></i> 5 &nbsp;&nbsp;
                            <i class="fas fa-users"></i> 12 &nbsp;
                            <i class="fas fa-heart"></i> 50
                          </div>
                          <div class="col-6">
                            <button type="button" class="room_modal_join btn btn-secondary">Join</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class=" room_modal_right col-1"> <i class="fas fa-caret-right"></i></div>

                </div>
              </div>
          </Modal.Body>
          <Modal.Footer className="room_modal_footer">

          </Modal.Footer>
        </Modal>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  room: state.rooms.room
});

export default connect(mapStateToProps)(RoomModal);
