import * as actionTypes from './actionTypes';
import service from './service';

const routesMap = {
  [actionTypes.ROUTE_POSTS]: {
    path: '/posts',
    thunk: async (dispatch) => {
      const posts = await service.getPosts();

      dispatch({ type: actionTypes.POSTS_LOADED, payload: posts });
    },
  },
  [actionTypes.ROUTE_POST]: {
    path: '/posts/:id',
    thunk: async (dispatch, getState) => {
      const { id } = getState().location.payload;
      const post = await service.getPost(id);

      dispatch({ type: actionTypes.POST_LOADED, payload: post });
    },
  },
  [actionTypes.ROUTE_COMMENTS]: {
    path: '/posts/:id/comments',
  },
};

export default routesMap;
