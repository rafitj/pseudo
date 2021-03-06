import { EDIT_ROOM, GET_ROOMS, GET_ROOM, DELETE_ROOM, ADD_ROOM, LOADING_ROOMS } from '../actions/types.js'

const initialState = {
  rooms: [],
  room: null,
  total_rooms: 0,
  isLoading: false
}

export default function (state = initialState, action) {
  switch(action.type){
    case LOADING_ROOMS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ROOM:
      return {
        ...state,
        room: action.payload
      };
    case GET_ROOMS:
      return {
        ...state,
        total_rooms: action.payload.length,
        isLoading: false,
        rooms: action.payload
      };
    case DELETE_ROOM:
      return {
        ...state,
        total_rooms: (state.total_rooms - 1),
        isLoading: false,
        rooms: state.rooms.filter(room => room.id !== action.payload)
      };
    case ADD_ROOM:
      return {
        ...state,
        total_rooms: (state.total_rooms + 1),
        isLoading: false,
        rooms: [...state.rooms, action.payload]
      };
    case EDIT_ROOM:
      return {
        ...state,
        rooms: [...state.rooms, action.payload]
      };
    default:
      return state;
  }
}
