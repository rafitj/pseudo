import { CLOSE_LOGOUT_MODAL, OPEN_LOGOUT_MODAL } from "../actions/types";

const initialState = {
  logout_modal: false
}

export default function (state = initialState, action) {
  switch(action.type){
    case CLOSE_LOGOUT_MODAL:
      return {
        ...state,
        logout_modal: false
      };
    case OPEN_LOGOUT_MODAL:
      return {
        ...state,
        logout_modal: true
      };
    default:
      return state;
  }
}
