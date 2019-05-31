export const open_register =  () => {
  return (dispatch, getState) => {
      dispatch({type: 'OPEN_REGISTER_MODAL'});
  }
}

export const close_register =  () => {
    return (dispatch, getState) => {
        dispatch({type: 'CLOSE_REGISTER_MODAL'});
    }
  }