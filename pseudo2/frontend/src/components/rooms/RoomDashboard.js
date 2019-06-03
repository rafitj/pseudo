import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class RoomDashboard extends React.Component{
  render(){
    return (
      <Fragment>
        <Link to="">
            Enter
        </Link>
        <Link to="/create-room">
            Create
        </Link>
        <Link to="/my-rooms">
            My Rooms
        </Link>
      </Fragment>
    );
  }
}

export default RoomDashboard;
