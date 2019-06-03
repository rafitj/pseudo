export const open_logout=  () => {
  return (dispatch, getState) => {
      dispatch({type: 'OPEN_LOGOUT_MODAL'});
  }
}

export const close_logout =  () => {
    return (dispatch, getState) => {
        dispatch({type: 'CLOSE_LOGOUT_MODAL'});
    }
  }
  