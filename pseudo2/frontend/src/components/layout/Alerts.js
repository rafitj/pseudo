import React, {Fragment} from 'react';
import { withAlert } from 'react-alert';
import {connect} from 'react-redux';

export class Alerts extends React.Component {
  componentDidUpdate(prevProps) {
    const { error , alert, message} = this.props
    if(error !== prevProps.error){
      if (error.msg.title){
        alert.error(`Title: ${error.msg.title.join()}`);
      }
      if (error.msg.summary){
        alert.error(`Summary: ${error.msg.summary.join()}`);
      }
      if (error.msg.non_field_errors){
        alert.error(error.msg.non_field_errors.join());
      }
      if (error.msg.username){
        alert.error(error.msg.username.join());
      }
    }

    if(message !== prevProps.message){
      if (message.deleteRoom){
        alert.success(message.deleteRoom);
      }
      if (message.addRoom){
        alert.success(message.addRoom);
      }
      if (message.passwordNotMatch){
        alert.error(message.passwordNotMatch);
      }
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert(Alerts));
