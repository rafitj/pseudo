import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import UserHeader from '../common/UserHeader';
// import { getProfiles } from '../../actions/profiles';

class CurrUserProfile extends React.Component{
  render(){
    const userProfile = this.props.profiles.find(profile => profile.user === this.props.currUser);
    if (userProfile === undefined){
      return (
        <Fragment>
          <p>Loading</p>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className="mt-5 mb-5 container">
          <div className="row">
            <div className="col-4">
              <img src = {userProfile.profile_image} />
                <div><UserHeader userId = {userProfile.user}/></div>
                <div>{userProfile.title}</div>
                <div>Stats</div>
                <div>{userProfile.bio}</div>
                <div>Websites</div>
                <div>Skills</div>

            </div>
            <div className="col-4">
              <div className="profile_box"></div>
              <div className="profile_box"></div>
              <div className="profile_box"></div>
            </div>
            <div className="col-4">
              <div className="profile_box"></div>
              <div className="profile_box"></div>
              <div className="profile_box"></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default (CurrUserProfile);
