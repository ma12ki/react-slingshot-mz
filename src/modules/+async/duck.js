import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';

import { moduleName } from './constants';

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

const loading = (state = false, { type }) => {
  switch (type) {
    case ASYNC_REQUEST: {
      return true;
    }
    case ASYNC_RESPONSE:
    case ASYNC_ERROR: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case ASYNC_REQUEST:
    case ASYNC_RESPONSE: {
      return null;
    }
    case ASYNC_ERROR: {
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
// epics
//
const getAsyncDataEpic$ = action$ => action$
  .ofType(ASYNC_REQUEST)
  .switchMap(() => getAsyncData$()
    .map(res => asyncResponse(res.data))
    .catch(err => Observable.of(asyncError(err))));

export const epics = combineEpics(
  getAsyncDataEpic$,
);

//
// services
//
export const getAsyncData$ = () => Observable
  .of({ data: "ohai, I'm async data from a dynamically loaded epic, from a dynamically loaded module" })
  .delay(1000);
