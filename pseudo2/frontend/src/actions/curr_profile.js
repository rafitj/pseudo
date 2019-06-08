import {
  FETCH_PROFILE
} from "./types";
import axios from "axios";

export const fetchProfile = (user_id) => {
  return async (dispatch, getState) => {
    const response = await axios
    .get(`/api/profiles/`)
    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
    var filtered_res = response.data.find(data => data.user==user_id)
    if (filtered_res == undefined){
      filtered_res = null
    }
    dispatch({type: FETCH_PROFILE, payload:filtered_res});
  }
}
 