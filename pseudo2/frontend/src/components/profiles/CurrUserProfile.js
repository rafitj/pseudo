import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import UserHeader from '../common/UserHeader';
import { fetchProfile } from '../../actions/curr_profile';
import {Link} from 'react-router-dom';

class CurrUserProfile extends React.Component{
  componentDidMount(){
    this.props.fetchProfile(this.props.userId);
  }
  renderLinks(){
    const {userProfiles} = this.props;
    if (userProfiles===undefined) {
      return(<div></div>);
    }
    const userProfile = userProfiles[0]
    if (userProfile.website!=undefined && userProfile.github!=undefined && userProfile.github!='' && userProfile.website!='' ){
      return(
        <Fragment>
        <div className="userProfile_links"><i className="fas fa-globe"></i> &nbsp; <a href={userProfile.website}>{userProfile.website.substring(8)}</a> </div>
        <div className="userProfile_links"><i className="fab fa-github"></i> &nbsp; <a href={userProfile.github}>{userProfile.github.substring(8)} </a></div>
        </Fragment>
      );
    }
  }
  render(){
    const {userProfile} = this.props;
    if (userProfile == undefined){
      return(<div>Loading</div>);
    }
    if (userProfile === undefined){
      return (
        <Fragment>
          <p>Loading</p>
        </Fragment>
      );
    }
    else{
      return (
        <Fragment>
          <div className="mt-5 mb-5 container">
            <div className="row">
              <div className="profile_container">
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      <img className="user_profile_image" src = {userProfile.profile_image} />
                    </div>
                    <div className="col-9">
                      <div className="userProfile_username"><UserHeader userId = {this.props.userId} userProperty="username"/></div>
                      <div className="mb-1 userProfile_title">{userProfile.title}</div>
                      <div className="mb-1 userProfile_bio">{userProfile.bio}</div>
                      <div className="mt-2 userProfile_skills">{userProfile.skills}</div>
                      {this.renderLinks()}
                    </div>
                  </div>
                </div>

              </div>
                <div className="profile_options col-12">
                  <Link to = '/profile/edit'>
                    <button className = "profile_edit_buttons"><i className="fas fa-user-edit"></i> Edit Profile</button>
                  </Link>
                  <button className = "profile_edit_buttons"><i className="fas fa-file-image"></i> New Profile Image</button>
                  <button className = "profile_edit_buttons"><i className="fas fa-key"></i> Reset Password</button>
                </div>

                <div className = "profile_boxes">

                <Link to = "/my-rooms"><div className="profile_box">
                  <div className = "content">
                    <span>Rooms</span>
                  </div>
                  </div>
                </Link>

                <Link>
                  <div className="profile_box">
                    <div className = "content">
                    <span>Followers</span>
                  </div>
                </div>
                </Link>

                <Link>
                  <div className="profile_box">
                    <div className = "content">
                   <span>Tokens</span>
                  </div>
                </div>
                </Link>

                <Link>
                  <div className="profile_box">
                    <div className = "content">
                    <span>Messages</span>
                  </div>
                </div>
                </Link>

                <Link>
                  <div className="profile_box">
                    <div className = "content">
                   <span>Follows</span>
                  </div>
                </div>
                </Link>

                <Link>
                  <div className="profile_box">
                    <div className = "content">
                   <span>Hiring Settings</span>
                  </div>
                </div>
                </Link>
                </div>

            </div>
          </div>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  userProfile : state.curr_profile,
  userId: state.auth.user.id
});

export default connect(mapStateToProps,{fetchProfile})(CurrUserProfile);
