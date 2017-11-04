/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React from 'react';

import * as actionTypes from './actionTypes';
import service from './service';
import { CommentList, PostList } from './components';

const routes = {
  [actionTypes.ROUTE_POSTS]: {
    path: '/posts',
    component: () => <PostList />,
    thunk: async (dispatch) => {
      const posts = await service.getPosts();

      dispatch({ type: actionTypes.POSTS_LOADED, payload: posts });
    },
  },
  [actionTypes.ROUTE_POST]: {
    path: '/posts/:id',
    component: () => <PostList />,
    thunk: async (dispatch, getState) => {
      const { id } = getState().location.payload;
      const post = await service.getPost(id);

      dispatch({ type: actionTypes.POST_LOADED, payload: post });
    },
  },
  [actionTypes.ROUTE_COMMENTS]: {
    path: '/posts/:id/comments',
    component: () => <CommentList />,
  },
};

export default routes;
