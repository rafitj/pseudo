
import { CLOSE_REGISTER_MODAL, OPEN_REGISTER_MODAL } from "../actions/types";

const initialState = {
  register_modal: false
}

export default function (state = initialState, action) {
  switch(action.type){
    case CLOSE_REGISTER_MODAL:
      return {
        ...state,
        register_modal: false
      };
    case OPEN_REGISTER_MODAL:
      return {
        ...state,
        register_modal: true
      };
    default:
      return state;
  }
}
