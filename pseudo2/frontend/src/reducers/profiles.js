import { GET_PROFILES } from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type){
    case GET_PROFILES:
      return action.payload;
    default:
      return state;
  }
}
