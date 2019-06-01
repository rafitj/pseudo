import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import UserHeader from '../common/UserHeader';
import { getProfiles } from '../../actions/profiles';
import {Link} from 'react-router-dom';

class CurrUserProfile extends React.Component{
  componentDidMount(){
    this.props.getProfiles();
  }
  renderLinks(){
    const {userProfile} = this.props;
    if (userProfile===undefined) {
      return(<div></div>);
    }
    if (userProfile.website!=undefined && userProfile.github!=undefined){
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
              <div className="col-4">
                <img className="profile_profile_image" src = {userProfile.profile_image} />
                  <div className="userProfile_username"><UserHeader userProperty="username" userId = {userProfile.user}/></div>
                  <div className="userProfile_title">{userProfile.title}</div>
                  <div className="userProfile_stats"><i className="fas pt-1 fa-star"></i> 5 &nbsp;  <i className="fas pt-1 fa-door-open"></i> 5</div>
                  <div className="userProfile_line"></div>
                  <div className="userProfile_bio">{userProfile.bio}</div>
                  <div className="userProfile_line"></div>

                  {this.renderLinks()}
                  <div className="userProfile_line"></div>
                  <div className="userProfile_skills">{userProfile.skills}</div>
                  <Link to = '/profile/edit'>
                    <button className = "profile_edit_buttons"><i className="fas fa-user-edit"></i> Edit Profile</button>
                  </Link>
                  <button className = "profile_edit_buttons"><i className="fas fa-file-image"></i> New Profile Image</button>
                  <button className = "profile_edit_buttons"><i className="fas fa-key"></i> Reset Password</button>
              </div>

              <div className="col-4">
                <Link to = "/my-rooms"><div className="profile_box">
                  <div className = "content">
                    <i className="fas fa-lg  fa-folder-open"></i><span>Rooms</span>
                  </div>
                  </div>
                </Link>

                <Link>
                  <div className="profile_box">
                    <div className = "content">
                    <i className="fas fa-lg fa-user-friends"></i><span>Followers</span>
                  </div>
                </div>
                </Link>

                <Link>
                  <div className="profile_box">
                    <div className = "content">
                    <i className="fas fa-lg fa-coins"></i><span>Tokens</span>
                  </div>
                </div>
                </Link>
              </div>

              <div className="col-4">
                <Link>
                  <div className="profile_box">
                    <div className = "content">
                    <i className="fas fa-lg fa-inbox"></i><span>Messages</span>
                  </div>
                </div>
                </Link>

                <Link>
                  <div className="profile_box">
                    <div className = "content">
                    <i className="fas fa-lg fa-users"></i><span>Follows</span>
                  </div>
                </div>
                </Link>

                <Link>
                  <div className="profile_box">
                    <div className = "content">
                    <i className="fas fa-lg fa-user-cog"></i><span>Hiring Settings</span>
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
  user : state.auth.user.id,
  userProfile : state.profiles
});

export default connect(mapStateToProps,{getProfiles})(CurrUserProfile);
