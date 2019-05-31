import { CLOSE_LOGIN_MODAL, OPEN_LOGIN_MODAL } from "../actions/types";

const initialState = {
  login_modal: false
}

export default function (state = initialState, action) {
  switch(action.type){
    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        login_modal: false
      };
    case OPEN_LOGIN_MODAL:
      return {
        ...state,
        login_modal: true
      };
    default:
      return state;
  }
}
