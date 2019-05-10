import { GET_PROFILES, EDIT_PROFILE } from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type){
    case GET_PROFILES:
      return action.payload;
    case EDIT_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
