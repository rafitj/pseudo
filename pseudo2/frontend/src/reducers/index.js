import {combineReducers} from 'redux';
import rooms from './rooms';
import errors from './errors'
import messages from './messages'
import auth from './auth'
import users from './users'

export default combineReducers({
  rooms,
  errors,
  messages,
  auth,
  users
});
