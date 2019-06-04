import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { getRoom, getRoomsAndCreator, deleteRoom } from '../../actions/rooms';
import UserHeader from '../common/UserHeader';
import RoomModal from './RoomModal';
import _ from 'lodash';
import AOS from 'aos';

class Rooms extends React.Component{
  constructor(props) {
    super(props)
    this.state = { modalShow: false , modal_to_show: null };
  }

  componentDidMount() {
    this.props.getRoomsAndCreator();
    AOS.init({once: true});
  }

  room_filter(rooms){
    const {query, userRooms, currUser} = this.props;
    const refined_query = (query.toLowerCase()).replace(/ +(?= )/g,'');
    if (query!== "") {
      return rooms.filter(room => (
        ((room.title).toLowerCase()).includes(refined_query)
        ||
        ((room.summary).toLowerCase()).includes(refined_query)
      )
      );
    }
    else {
      if (userRooms && currUser!=null){
        return rooms.filter(room => (room.creator === currUser.id));
      }
      else{
        return rooms;
      }
    }

  }

  editableRoom(room){
    if (this.props.userRooms){
      return (
        <Fragment>
          <button onClick={this.props.deleteRoom.bind(this, room.id)} className="mt-1 del-btn btn btn-danger mr-2">Delete</button>
          <Link to ={`/edit-room/${room.id}`} className="mt-1 edit-btn btn btn-info mr-2">Edit</Link>
          <Link to ={`/edit-room/${room.id}`} className="mt-1 view-btn btn btn-info mr-2">View</Link>
        </Fragment>
      );
    }
    else{
      return null;
    }
  }

  renderRooms(){
    if (_.isEmpty(this.props.rooms)){

      return (
        <div id="loader"></div>
      );

    }
    else {
      var numRooms = 0;
      const filtered_rooms = this.room_filter(this.props.rooms);
      return (
      filtered_rooms.map(room => {
        if (numRooms==2){numRooms=0;}
        var duration = (1000 + (numRooms++)*250);

        const modal_click = () => {
          this.setState({ modalShow: true, modal_to_show: room.id });
          this.props.getRoom(room.id);
        }

        return(
          <div onClick={modal_click} data-aos="fade-up" data-aos-duration={duration} key = {room.id} className="mt-2 col-4 room" >
            <div className ="room">
            <div className="room_state"></div>
            <div className="room_body p-3 mr-1 ml-1">
                <div className="room_author m-1">
                  <a className="room-anchor" href="#">
                    <UserHeader userId = {room.creator} userProperty="username"/>
                  </a>
                </div>
              <div className="room_title p-2">
                  {room.title}
                  <br />
                  {this.editableRoom(room)}

              </div>
            </div>
          <div className="pl-1 pr-1 mt-1 room_footer_info">
           <div className="container">
             <div className="row">
               <div className="col-6 room_date">
                 Date Posted
               </div>
               <div className="col-6 room_stats">
                 <i className="fas fa-comment"></i> 5 &nbsp;&nbsp;
                 <i className="fas fa-users"></i> 12 &nbsp;
                 <i className="fas fa-heart"></i> 50
               </div>
             </div>
           </div>
          </div>
          </div>
         </div>

        );
      })
      );
    }
  }
  render(){
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <Fragment>
        <RoomModal show={this.state.modalShow} onHide={modalClose} roomId = {this.state.modal_to_show}/>
          <div className="center-content">
            <div className="container">
              <div className="row ">
                {this.renderRooms()}
              </div>
            </div>
          </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms.rooms,
  currUser: state.auth.user
});

export default connect(mapStateToProps,{getRoomsAndCreator, getRoom, deleteRoom})(Rooms);
