import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRoomsAndCreator, deleteRoom } from '../../actions/rooms';
import UserHeader from '../common/UserHeader';
import _ from 'lodash';
import AOS from 'aos';

class Rooms extends React.Component{

  componentDidMount() {
    this.props.getRoomsAndCreator();
    AOS.init({once: true});
  }

  room_filter(rooms){
    const {query} = this.props;
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
      return rooms;
    }


  }

  renderRooms(){
    if (_.isEmpty(this.props.rooms)){
      return <p>Loading</p>;
    }
    else {
      var numRooms = 0;
      const filtered_rooms = this.room_filter(this.props.rooms);
      return (
      filtered_rooms.map(room => {
        if (numRooms==2){numRooms=0;}
        var duration = (1000 + (numRooms++)*250);

        return(
          <div data-aos="fade-up" data-aos-duration={duration} key = {room.id} className="mt-4 col-4 room" >
            <div className="room_state"></div>
            <div className="room_body p-3 mr-1 ml-1">
                <div className="room_author m-1">
                  <a className="room-anchor" href="#">
                    <UserHeader userId = {room.creator}/>
                  </a>
                </div>
              <div className="room_title p-2">
                  {room.title}
                  <br />
                  <button onClick={this.props.deleteRoom.bind(this, room.id)} className="btn btn-danger mr-2">Delete</button>
                  <button className="btn btn-info mr-2">Edit</button>
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

        );
      })
      );
    }
  }
  render(){
    return (
      <Fragment>
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
  rooms: state.rooms.rooms
});

export default connect(mapStateToProps,{getRoomsAndCreator, deleteRoom})(Rooms);
