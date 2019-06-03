import React, {Fragment} from 'react';
import { getProfiles } from '../../actions/profiles';
import {connect} from 'react-redux';
import UserHeader from '../common/UserHeader';
import AOS from 'aos';
import _ from 'lodash';


class ProfileList extends React.Component{
  componentDidMount(){
    this.props.getProfiles();
    AOS.init({once: true});
  }
  renderProfiles(){
    if (_.isEmpty(this.props.profiles)){
      return <p>Loading</p>;
    }
    else {
      var numProfiles = 0;
      return (
      this.props.profiles.map(profile => {

        if (numProfiles==1){numProfiles=0;}
        var duration = (1000 + (numProfiles++)*250);

        return(
          <div data-aos="fade-up" data-aos-duration={duration} key = {profile.id} className="mt-4 col-6 profile" >
            <div className="container">
              <div className="row profile_body  ">
                <div className = "col-5 profile_image_container">
                  <img className = "ml-3 profile_profile_image" src = {profile.profile_image} />
                </div>
                <div className = "col-7 profile_info_container">
                  <div className="profile_info_sub_container">
                  <div className="profile_username "><UserHeader userProperty="username" userId = {profile.user}/></div>
                  <div className="profile_subtitle mb-1">{profile.title}</div>
                  <div className="profile_stats mb-1">
                    <i className="fas fa-star"></i> 5   <i className="ml-2 fas fa-door-open"></i> 5
                  </div>
                  <div className="profile_line mb-1"></div>
                  <div className="profile_bio mb-2">{profile.bio}</div>
                  <div className="profile_actions">
                    <i className="f mr-2 fas fa-lg fa-user-circle"></i>
                    <i className="f mr-2 fas fa-lg fa-envelope"></i>
                    <i className="f far fa-lg fa-star"></i>
                  </div>
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
          <div className="center-content">
            <div className="container">
              <div className="row ">
                {this.renderProfiles()}
              </div>
            </div>
          </div>
      </Fragment>
    );
    }
  }


const mapStateToProps = state => ({
  profiles: state.profiles,
});

export default connect(mapStateToProps,{getProfiles})(ProfileList);
