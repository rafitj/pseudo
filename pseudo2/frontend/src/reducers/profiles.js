import { GET_PROFILES, EDIT_PROFILE, FETCH_PROFILE, CREATE_PROFILE } from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type){
    case GET_PROFILES:
    case EDIT_PROFILE:
    case CREATE_PROFILE:
    case FETCH_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
