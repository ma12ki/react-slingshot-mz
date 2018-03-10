/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React from 'react';

import {
  ROUTE_POSTS,
  ROUTE_POST,
  ROUTE_COMMENTS,
  getPosts,
  getPost,
  getComments,
  postLoaded,
  postsLoaded,
  commentsLoaded,
} from './duck';
import { CommentList, PostList, PostDetails } from './components';

const routes = {
  [ROUTE_POSTS]: {
    path: '/posts',
    component: () => <PostList />,
    thunk: async (dispatch) => {
      const posts = await getPosts();

      dispatch(postsLoaded(posts));
    },
  },
  [ROUTE_POST]: {
    path: '/posts/:id',
    component: () => <PostDetails />,
    thunk: async (dispatch, getState) => {
      const { id } = getState().location.payload;
      const post = await getPost(id);

      dispatch(postLoaded(post));
    },
  },
  [ROUTE_COMMENTS]: {
    path: '/posts/:id/comments',
    component: () => <CommentList />,
    thunk: async (dispatch, getState) => {
      const { id } = getState().location.payload;
      const comments = await getComments(id);

      dispatch(commentsLoaded(comments));
    },
  },
};

export default routes;
