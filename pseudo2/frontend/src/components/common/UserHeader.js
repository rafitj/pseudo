import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user';

class UserHeader extends React.Component{
  componentDidMount(){
    if (this.props.userId != undefined){
      this.props.fetchUser(this.props.userId.id)
    }
  }
  render(){
    const user = this.props.user;
    if (!user){
      return null;
    }
    if (this.props.userProperty === "username"){
      return (
        <div className = "header">
          { user.username }
        </div>
      );
    }
    else if (this.props.userProperty === "email"){
      return (
        <div className = "header">
          { user.email }
        </div>
      );
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    userId : state.auth.user,
  };
}

export default connect(mapStateToProps, {fetchUser})(UserHeader);
