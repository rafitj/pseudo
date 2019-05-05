import axios from "axios";

import {
  FETCH_USER
} from "./types";

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`api/user/users/${id}`)
      .catch(err =>
          dispatch(returnErrors(err.response.data, err.response.status))
        );
     dispatch({type: FETCH_USER, payload: response.data});
  }
}
