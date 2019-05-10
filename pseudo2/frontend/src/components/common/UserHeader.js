import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component{
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
    user: state.user.find(user => user.id === ownProps.userId)
  };
}

export default connect(mapStateToProps)(UserHeader);
