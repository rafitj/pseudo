import axios from "axios";
import {fetchUser} from './users';
import {loadUser} from './auth';
import {
  GET_PROFILES
} from "./types";

export const getProfilesAndUsers =  () => {
  return async (dispatch, getState) => {
    await dispatch(getProfiles());
    const users = _.uniq(_.map(getState().profiles, 'user'))
    users.forEach(id => dispatch(fetchUser(id)));
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
    console.log("Profiles Loaded");
  }
}
