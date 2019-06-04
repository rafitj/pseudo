import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import MyRooms from './MyRooms';
class RoomDashboard extends React.Component{
  render(){
    return (
      <Fragment>
      <div className = "dashboard_container">
        <Link to="/create-room">
          <div className = "dashboard_box">
            <h3>Create Post</h3>
            <p>Make a post about a problem or project
              and get experienced creators to teach you
              what you need to learn. Get started now!</p>
          </div>
        </Link>
        <Link to="/">
          <div className = "dashboard_box">
            <h3>Import Post</h3>
            <p>You can now import any StackOverflow
                post and create a new project using its 
                contents. Tag a post and customize it for your needs.
                Get started now!</p>
          </div>
        </Link>
      </div>

        <MyRooms/>

      </Fragment>
    );
  }
}

export default RoomDashboard;
