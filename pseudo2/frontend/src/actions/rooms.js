import axios from 'axios'
import {GET_ERRORS, GET_ROOMS, DELETE_ROOM, ADD_ROOM} from './types'
import { createMessage, returnErrors } from "./messages";
import {tokenConfig} from './auth';
//GET rooms
export const getRooms = () => (dispatch, getState) => {
  axios.get('/api/rooms/', tokenConfig(getState)).then(res => {
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
