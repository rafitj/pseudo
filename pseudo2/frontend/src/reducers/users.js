import { GET_USERS, FETCH_USER } from '../actions/types.js'

export default (state = [], action) => {
  switch (action.type){
    case GET_USERS:
    case FETCH_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}
