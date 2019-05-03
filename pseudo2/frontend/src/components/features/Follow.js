import React, {Fragment} from 'react';
import Users from '../rooms/Users';
import Search from '../common/Search';
import {connect} from 'react-redux';

class Follow extends React.Component{
  render(){
    return (
      <Fragment>
        <Search placeholder="Follow Other Users ..."/>
        <Users />
      </Fragment>
    );
  }
}

export default Follow;
