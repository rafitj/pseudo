import {combineReducers} from 'redux';
import rooms from './rooms';
import errors from './errors'
import messages from './messages'
import auth from './auth'
import user from './user'
import profiles from './profiles'
import login_modal from './login_modal';
import register_modal from './register_modal';

export default combineReducers({
  rooms,
  errors,
  messages,
  auth,
  modal,
  user,
  profiles,
  register_modal,
  login_modal
});
