import React from 'react';
import {connect} from 'react-redux';
import { getRooms } from '../../actions/rooms';

class Footer extends React.Component{
  componentDidMount(){
    this.props.getRooms();
  }
  render(){
    return (
      <footer className="base_footer">
        <div className="footer_border"></div>
        <div className="footer_body">
          <div className="container">
            <div className="row">
              <div className="footer_left mt-3 col-6">
                <h1 className="mb-0">Pseudo</h1>
                For creators, developers, designers. For you. <br />
              <div className="mt-2 footer_social_media_icons">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-github"></i>
                </div>
              </div>
              <div className="footer_right mt-4 col-6">
                <div className="mb-2">
                  <div className="container">
                    <div className="row ">
                      <div className="m-0  p-0 col-7"></div>
                      <div className="m-0 p-0 col-2 door">
                        <i className="fas mt-1 ml-1  fa-door-open"></i> &nbsp;
                      </div>
                      <div className="footer_count pt-3 pr-3 col-3">
                        <span className="exact_count">{this.props.total_rooms}</span>
                        <br />
                        <span className="mt-2">doors opened</span>
                      </div>
                    </div>
                  </div>
                </div>
                <small>© 2019 Pseudo. All rights reserved.</small>
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

const mapStateToProps = state => ({
  total_rooms: state.rooms.total_rooms
});


export default connect(mapStateToProps,{getRooms})(Footer);
