import { combineReducers } from 'redux';

import { moduleName } from './constants';
// import { apiService } from '../utils';

//
// actions
//
export const ROUTE_ASYNC = `${moduleName}/ROUTE_ASYNC`;

export const ASYNC_REQUEST = `${moduleName}/ASYNC_REQUEST`;
export const ASYNC_RESPONSE = `${moduleName}/ASYNC_RESPONSE`;
export const ASYNC_ERROR = `${moduleName}/ASYNC_ERROR`;

export const asyncRequest = () => ({ type: ASYNC_REQUEST });
export const asyncResponse = res => ({ type: ASYNC_RESPONSE, payload: res });
export const asyncError = err => ({ type: ASYNC_ERROR, payload: err });

//
// reducers
//
const data = (state = null, { type, payload }) => {
  switch (type) {
    case ASYNC_REQUEST: {
      return null;
    }
    case ASYNC_RESPONSE: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

const loading = (state = null, { type, payload }) => {
  switch (type) {
    case ASYNC_REQUEST: {
      return null;
    }
    case ASYNC_RESPONSE: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ASYNC_REQUEST: {
      return null;
    }
    case ASYNC_RESPONSE: {
      return payload;
    }
    default: {
      return state;
    }
  }
};


const reducer = combineReducers({
  data,
  loading,
  error,
});

export default reducer;

//
// selectors
//
const moduleSel = (state) => state[moduleName];

export const dataSel = (state) => moduleSel(state).data;
export const loadingSel = (state) => moduleSel(state).loading;
export const errorSel = (state) => moduleSel(state).error;

//
// services
//
// export const getPosts = () => apiService.get('/posts');
// export const getPost = (id) => apiService.get(`/posts/${id}`);
// export const getComments = (postId) => apiService.get(`/posts/${postId}/comments`);
