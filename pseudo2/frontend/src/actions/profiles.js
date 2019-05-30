import axios from "axios";
import {fetchUser} from './users';
import {loadUser} from './auth';
import {
  GET_PROFILES,
  EDIT_PROFILE
} from "./types";

export const getProfilesAndUsers =  () => {
  return async (dispatch, getState) => {
    await dispatch(getProfiles());
    const users = _.uniq(_.map(getState().profiles, 'user'))
    users.forEach(id => dispatch(fetchUser(id)));
  }
}

export const fetchProfile =  (id) => {
  return async (dispatch, getState) => {
    const response = await axios
    .get(`/api/profiles/${id}`)
    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
    dispatch({type: FETCH_PROFILE, payload: response.data});
  }
}
 
export const getProfiles =  () => {
  return async (dispatch, getState) => {
    const response = await axios
    .get('/api/profiles/')
    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
    dispatch({type: GET_PROFILES, payload: response.data});
  }
}

export const editProfile = (profile, profile_id) => (dispatch, getState) => {
  axios.patch(`/api/profiles/${profile_id}/`, profile).then(res => {
    dispatch({
      type: EDIT_PROFILE,
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

