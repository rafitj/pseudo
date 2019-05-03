import JSONplaceholder from '../apis/JSONplaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers =   () => {
  return async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    console.log(userIds);
    userIds.forEach(id => dispatch(fetchUser(id)));
  }
}

export const fetchPosts =   () => {
  return async (dispatch) => {
    const response = await JSONplaceholder('/posts')

    dispatch({type: 'FETCH_POSTS', payload: response.data});
  }
}

export const fetchUser =   (id) => {
  return async (dispatch) => {
    const response = await JSONplaceholder(`/users/${id}`)

    dispatch({type: 'FETCH_USER', payload: response.data});
  }
}
