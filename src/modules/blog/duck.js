import { combineReducers } from 'redux';

import { moduleName } from './constants';
import { apiService } from '../utils';

//
// actions
//
export const ROUTE_POSTS = `${moduleName}/ROUTE_POSTS`;
export const ROUTE_POST = `${moduleName}/ROUTE_POST`;
export const ROUTE_COMMENTS = `${moduleName}/ROUTE_COMMENTS`;

export const POSTS_LOADED = `${moduleName}/POSTS_LOADED`;
export const POSTS_FAILED = `${moduleName}/POSTS_FAILED`;
export const POST_LOADED = `${moduleName}/POST_LOADED`;
export const POST_FAILED = `${moduleName}/POST_FAILED`;
export const COMMENTS_LOADED = `${moduleName}/COMMENTS_LOADED`;
export const COMMENTS_FAILED = `${moduleName}/COMMENTS_FAILED`;

export const postsLoaded = (posts) => ({
  type: POSTS_LOADED,
  payload: posts,
});

export const postLoaded = (post) => ({
  type: POST_LOADED,
  payload: post,
});

export const commentsLoaded = (comments) => ({
  type: COMMENTS_LOADED,
  payload: comments
});

//
// reducers
//
const postsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case POSTS_LOADED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const postReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case POST_LOADED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const commentsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case COMMENTS_LOADED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

const reducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
});

export default reducer;

//
// selectors
//
const moduleSel = (state) => state[moduleName];

export const postsSel = (state) => moduleSel(state).posts;
export const postSel = (state) => moduleSel(state).post;
export const commentsSel = (state) => moduleSel(state).comments;

//
// services
//
export const getPosts = () => apiService.get('/posts');
export const getPost = (id) => apiService.get(`/posts/${id}`);
export const getComments = (postId) => apiService.get(`/posts/${postId}/comments`);
