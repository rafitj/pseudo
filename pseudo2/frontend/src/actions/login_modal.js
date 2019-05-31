export const open_login =  () => {
  return (dispatch, getState) => {
      dispatch({type: 'OPEN_LOGIN_MODAL'});
  }
}

export const close_login =  () => {
    return (dispatch, getState) => {
        dispatch({type: 'CLOSE_LOGIN_MODAL'});
    }
  }
  