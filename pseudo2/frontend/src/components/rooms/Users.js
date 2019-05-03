import React, {Fragment} from 'react';
import { getUsers } from '../../actions/users';
import {connect} from 'react-redux';
import AOS from 'aos';
import _ from 'lodash';

class Users extends React.Component{
  componentDidMount(){
    this.props.getUsers();
    AOS.init({once: true});
  }
  renderUsers(){
    if (_.isEmpty(this.props.users)){
      return <p>Loading</p>;
    }
    else {
      var numUsers = 0;
      return (
      this.props.users.map(user => {

        if (numUsers==2){numUsers=0;}
        var duration = (1000 + (numUsers++)*250);

        return(
          <div data-aos="fade-up" data-aos-duration={duration} key = {user.id} className="mt-4 col-4 room" >
            <div className="room_body p-3 mr-1 ml-1">
                <div className="room_author m-1">
                  <a className="room-anchor" href="#">
                    {user.email}
                  </a>
                </div>
              <div className="room_title p-2">
                  {user.username}
              </div>
            </div>
          <div className="pl-1 pr-1 mt-1 room_footer_info">
           <div className="container">
             <div className="row">
               <div className="col-6 room_date">
                 Date Posted
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
                {this.renderUsers()}
              </div>
            </div>
          </div>
      </Fragment>
    );
    }
  }


const mapStateToProps = state => ({
  users: state.users[0]
});

export default connect(mapStateToProps,{getUsers})(Users);
