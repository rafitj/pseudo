import axios from 'axios'
import {GET_ERRORS, EDIT_ROOM, GET_ROOMS, GET_ROOM, GET_ROOM_CREATOR, DELETE_ROOM, ADD_ROOM, FETCH_USER, LOADING_ROOMS} from './types'
import { createMessage, returnErrors } from "./messages";
import {tokenConfig} from './auth';
import _ from 'lodash';
import {fetchUser} from './users';

export const getRoomsAndCreator =  () => {
  return async (dispatch, getState) => {
    await dispatch(getRooms());
    const creators = _.uniq(_.map(getState().rooms.rooms, 'creator'))
    creators.forEach(id => dispatch(fetchUser(id)));
  }
}

export const getRooms =   () => {
  return async (dispatch, getState) => {
    const response = await axios
    .get('/api/rooms/', tokenConfig(getState))
    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
    dispatch({type: GET_ROOMS, payload: response.data});
  }
}

export const getRoom =   (id) => {
  return async (dispatch, getState) => {
    const response = await axios
    .get(`/api/rooms/${id}`)
    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
    dispatch({type: GET_ROOM, payload: response.data});
  }
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

//Edit rooms
export const editRoom = (room, room_id) => (dispatch, getState) => {
  axios.patch(`/api/rooms/${room_id}/`, room, tokenConfig(getState)).then(res => {
    dispatch(createMessage({roomAdded: 'Room Edited'}));
    dispatch({
      type: EDIT_ROOM,
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
