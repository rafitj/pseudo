import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRooms, deleteRoom } from '../../actions/rooms';
import _ from 'lodash';

class Rooms extends React.Component{
  componentDidMount() {
    this.props.getRooms();
  }


  renderRooms(){
    if (_.isEmpty(this.props.rooms)){
      return <p>Loading</p>
    }
    else {
      return (
      this.props.rooms.map(room => {
        console.log(room);
        return(
          <div class="mt-4 col-4 post" >
            <div class="post_state"></div>
            <div class="post_body p-3 mr-1 ml-1">
                <div class="post_author m-1">
                  <a class="post-anchor" href="{% url 'user-posts' post.author.username %}">
                    Author
                  </a>
                </div>
              <div class="post_title p-2">
                  {room.title}
                  <br />
                  <button onClick={this.props.deleteRoom.bind(this, room.id)} className="btn btn-danger mr-2">Delete</button>
                  <button className="btn btn-info mr-2">Edit</button>
              </div>
            </div>
          <div class="pl-1 pr-1 mt-1 post_footer_info">
           <div class="container">
             <div class="row">
               <div class="col-6 post_date">
                 Date Posted
               </div>
               <div class="col-6 post_stats">
                 <i class="fas fa-comment"></i> 5 &nbsp;&nbsp;
                 <i class="fas fa-users"></i> 12 &nbsp;
                 <i class="fas fa-heart"></i> 50
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
          <div class="center-content">
            <div class="container">
              <div class="row ">
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

export default connect(mapStateToProps,{getRooms, deleteRoom})(Rooms);
