import React, {Fragment} from 'react';
import ProfileList from '../profiles/ProfileList';
import Search from '../common/Search';
import {connect} from 'react-redux';

class Follow extends React.Component{
  render(){
    return (
      <Fragment>
        <Search placeholder="Follow Other Users ..."/>
        <ProfileList />
      </Fragment>
    );
  }
}

export default Follow;
