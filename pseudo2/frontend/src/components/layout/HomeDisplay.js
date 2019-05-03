import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../../actions/auth';
import BannerImg from '../../../static/frontend/assets/home_banner.png'
import { getRoomsAndCreator } from '../../actions/rooms';
import _ from 'lodash';
import Slider from "react-slick";

class HomeDisplay extends React.Component{

  componentDidMount() {
    this.props.getRoomsAndCreator();
  }

  renderRooms(){
    if (_.isEmpty(this.props.rooms)){
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    else {
      return (
      this.props.rooms.map(room => {
        return(
          <div key = {room.id} className=" ml-3 mr-3 rec_room" >
            <div className="rec_room_state"></div>
            <div className="rec_room_body p-3 mr-1 ml-1">
                <div className="rec_room_author m-1">
                  <a className="rec_room-anchor" href="#">
                    Author
                  </a>
                </div>
              <div className="rec_room_title p-2">
                  {room.title}
                  <br />
              </div>
            </div>
          <div className="pl-1 pr-1 mt-1 rec_room_footer_info">
           <div className="container">
             <div className="row">
               <div className="col-6 rec_room_date">
                 Date Posted
               </div>
               <div className="col-6 rec_room_stats">
                 <i className="fas fa-comment"></i> 5 &nbsp;&nbsp;
                 <i className="fas fa-users"></i> 12 &nbsp;
                 <i className="fas fa-heart"></i> 50
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
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      arrows: true,
      centerPadding: '60px',
      focusOnSelect:true,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    const {isAuthenticated, user} = this.props.auth;
    const displayRecentRooms = (
      <div className="carousel_container">
        <div className = "recent_rooms ">Recent Rooms</div>
        <Slider {...settings}>
          {this.renderRooms()}
        </Slider>
      </div>
    );

    const displayBanner = (
        <div className = "banner" >
          <img className="banner-img" src={BannerImg} alt="New-Banner-Image" />
            <button className="b_button" type="button" name="button"><span className="button-txt">Sign-Up</span></button>
        </div>
    );
    return (
      <Fragment>
        {isAuthenticated ? displayRecentRooms : displayBanner }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  rooms: state.rooms.rooms,
  isLoading: state.rooms.isLoading
});

export default connect(mapStateToProps, {logout, getRoomsAndCreator})(HomeDisplay);
