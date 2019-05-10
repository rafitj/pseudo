import React, {Fragment} from 'react';
import Rooms from './Rooms';
import {connect} from 'react-redux';

class MyRooms extends React.Component{
  render(){
    return (
      <Fragment>
        <Rooms query="" userRooms/>
      </Fragment>
    );
  }
}

export default MyRooms;
