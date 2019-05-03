import axios from "axios";

import {
  GET_USERS
} from "./types";

export const getUsers = () => dispatch => {
  axios
  .get('/api/user/users')
  .then(res => {
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  }).catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
}
