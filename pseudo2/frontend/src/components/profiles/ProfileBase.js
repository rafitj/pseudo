import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import CurrUserProfile from './CurrUserProfile';
import { getProfiles } from '../../actions/profiles';

class ProfileBase extends React.Component{
  componentDidMount(){
    this.props.getProfiles();
  }
  render(){
    if (this.props.currUser !== null && this.props.currUser.user){
      return (
        <Fragment>
          <CurrUserProfile currUser={this.props.currUser.user.id} profiles ={this.props.profiles}/>
        </Fragment>
      );
    }
    else{
      return (
        <Fragment>
          <div>Loading</div>
        </Fragment>
      );
    }

  }
}

const mapStateToProps = (state) => {
  return {
    currUser: state.auth,
    profiles: state.profiles
  };
}

export default connect(mapStateToProps,{getProfiles})(ProfileBase);
