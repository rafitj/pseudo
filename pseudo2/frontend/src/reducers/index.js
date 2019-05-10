import {combineReducers} from 'redux';
import rooms from './rooms';
import errors from './errors'
import messages from './messages'
import auth from './auth'
import users from './users'
import profiles from './profiles'
import modal from './modal';

export default combineReducers({
  rooms,
  errors,
  messages,
  auth,
  modal,
  user: users,
  profiles
});
