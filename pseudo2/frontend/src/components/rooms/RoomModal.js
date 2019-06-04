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
          <Modal.Body>
            Loading
          </Modal.Body>
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
          <Modal.Body className = "room_modal_body">
            <div className="pt-3 pb-3 container">
                <div className="row">
                  <div className = "col-10">
                    <div className = "room_modal_status">
                      Active
                    </div>
                    <div className="room_modal_title">
                      <h2 >{title}</h2>
                    </div>
                  </div>
                  <div className = "col-2">
                    <img className="rounded-circle" src={room_image} alt="" />
                    <br />
                    <div className = "mt-1 room_modal_date"><p>09/11/12</p></div>
                  </div>
                 
                  <br />
                  <div className = "col-10">
                  <div className="room_modal_summary">
                      {summary}
                  </div>
                  <br />
                  </div>
                  <div className="room_modal_stats col-12">
                    <div className = "room_modal_tags"> Python, Django, Bootstrap </div>
                  </div>
                  <div className="room_modal_stats col-8">
                      <div className = "room_modal_stat"> <i className="fas fa-comment"></i> 5 </div>
                      <div className = "room_modal_stat">  <i className="fas fa-users"></i> 12 </div>
                      <div className = "room_modal_stat"> <i className="fas fa-heart"></i> 50 </div>
                  </div>
                  <div className="col-4"> 
                    <button type="button" class="view_button">View</button>
                  </div>
                </div>
              </div>
          </Modal.Body>
        </Modal>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  room: state.rooms.room
});

export default connect(mapStateToProps)(RoomModal);
