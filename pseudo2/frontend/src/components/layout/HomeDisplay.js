import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { logout } from '../../actions/auth';
import banner_img_1 from '../../../static/frontend/assets/banner_img_1.png'
import banner_img_2 from '../../../static/frontend/assets/banner_img_2.png'
import { getRoomsAndCreator } from '../../actions/rooms';
import _ from 'lodash';
import Rooms from '../rooms/Rooms';
import RoomModal from '../rooms/RoomModal';
import Slider from "react-slick";
import UserHeader from '../common/UserHeader';
class HomeDisplay extends React.Component{

  componentDidMount() {
    this.props.getRoomsAndCreator();
    const x =  Math.floor(Math.random()*2 + 1)
    if (x === 1){
      this.banner_header = "Sometimes building great things means getting help..."
      this.banner_img = banner_img_1
    }
    else {
      this.banner_header = "Sometimes it takes more than a StackOverflow search..."
      this.banner_img = banner_img_2
    }
  }

  renderRecentRooms(){
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
      this.props.rooms.slice(0, 3).map(room => {
        return(
          <div data-aos = "fade" data-aos-duration="1000" data-aos-delay = "500" key = {room.id}  className="col-4" >
            <div className = "rec_room">
              <div className="rec_room_state">{Math.floor(Math.random()*3) +1}</div>
              <div className="rec_room_body p-3">
                  <div className="rec_room_author m-1">
                    <a className="rec_room-anchor" href="#">
                      <UserHeader userId={room.creator}/>
                    </a>
                  </div>
                <div className="rec_room_title p-2">
                    {room.title}
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

    const {isAuthenticated, user} = this.props.auth
    const displayRecentRooms = (
      <div className="carousel_container">
          <div className = "container">
            <div className = "row">
               <div data-aos = "fade" data-aos-duration="1000" className = "recent_rooms_title">Recent Rooms</div>
               <div data-aos = "fade" data-aos-duration="1000"  className = "rec_room_border_top"></div>
              {this.renderRecentRooms()}
              <div data-aos = "fade" data-aos-duration="1000"  className = "rec_room_border_bottom"></div>
            </div>
          </div>
      </div>
    );
    const displayBanner = (
          <div className = "container" >
            <div className = "row">
              <div className = "col-6" data-aos="fade" data-aos-duration = "1000">
                <div className = "banner_img_container">
                <img className="banner_img" src={this.banner_img} alt="Banner-Image" />
                </div>
              </div>
              <div className = "col-6" data-aos="fade" data-aos-duration = "1000" data-aos-delay = "400">
                <div className = "landing_text_container">
                 <h1 className = "pseudo_header">{this.banner_header}</h1>
                  <p className = "pseudo_intro"> Pseudo is the world’s first, problem focused, micro-freelance 
                      platform. We bring together developers, 
                      designers and creators to form an intimate
                      community to help you build anything and everything. Join us today!</p>
                <button className = "landing_button">Sign-Up</button>
                <button className = "landing_button">Login</button>
                <p className = "pseudo_intro pseudo_learn">
                  <small> <a className = "pseudo_learn" href = "#">Learn how it works.</a></small> </p>
                </div>
              </div>


            </div>
          </div>
    );
    return (
      <Fragment>
        {isAuthenticated ? displayRecentRooms : displayBanner }
        <RoomModal />
        <div className = "list_selection col-12" data-aos="fade" data-aos-duration = "1000" data-aos-delay = "750">
                <p>Problems</p>
                <p>People</p>
        </div>
        <Rooms query=""/>
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
