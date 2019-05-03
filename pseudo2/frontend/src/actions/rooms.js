import axios from 'axios'
import {GET_ERRORS, GET_ROOMS, GET_ROOM_CREATOR, DELETE_ROOM, ADD_ROOM, FETCH_USER, LOADING_ROOMS} from './types'
import { createMessage, returnErrors } from "./messages";
import {tokenConfig} from './auth';
import _ from 'lodash';

export const getRoomsAndCreator =  () => {
  return async (dispatch, getState) => {
    await dispatch(getRooms());
    const creators = _.uniq(_.map(getState().rooms, 'creator'))
    creators.forEach(id => dispatch(fetchRoomCreator(id)));
  }
}


export const fetchRoomCreator = (id) => (dispatch) => {
  _fetchRoomCreator(id, dispatch);
};

const _fetchRoomCreator = _.memoize((id, dispatch) => {
  axios
    .get(`api/user/users/${id}`)
    .then(res => {
      dispatch({
        type: FETCH_USER,
        payload: res.data
      });
    })
    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
});


//GET rooms
export const getRooms = () => (dispatch, getState) => {
  axios
  .get('/api/rooms/', tokenConfig(getState))
  .then(res => {
    dispatch({
      type: GET_ROOMS,
      payload: res.data
    });
  }).catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

//Delete rooms
export const deleteRoom = (id) => (dispatch, getState) => {
  axios.delete(`/api/rooms/${id}/`, tokenConfig(getState)).then(res => {
    dispatch(createMessage({roomDeleted: 'Room Deleted'}));
    dispatch({
      type: DELETE_ROOM,
      payload: id
    });
  }).catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}

//Add rooms
export const addRoom = (room) => (dispatch, getState) => {
  axios.post('/api/rooms/', room, tokenConfig(getState)).then(res => {
    dispatch(createMessage({roomAdded: 'Room Added'}));
    dispatch({
      type: ADD_ROOM,
      payload: res.data
    });
  }).catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
}
