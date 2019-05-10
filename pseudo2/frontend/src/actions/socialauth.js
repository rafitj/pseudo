import axios from "axios";
import { returnErrors } from "./messages";
import {
  USER_LOADED,
  USER_LOADING,
  USER_FETCHED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";
export const social_login = () => dispatch => {
  const config = {
    client_id: "2007426045971320",
    redirect_uri: 'http://localhost:8000/',
    scope: ['email'],
    response_type : 'code'
  };
  axios
    .post("/api/login/social/knox_user/facebook", config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};
