import {combineReducers} from 'redux';
import rooms from './rooms';
import errors from './errors'
import messages from './messages'
import auth from './auth'
import user from './user'
import profiles from './profiles'
import login_modal from './login_modal';
import logout_modal from './logout_modal';
import register_modal from './register_modal';
import curr_profile from './curr_profile'

export default combineReducers({
  rooms,
  errors,
  messages,
  auth,
  modal,
  user,
  curr_profile,
  profiles,
  register_modal,
  logout_modal,
  login_modal
});
