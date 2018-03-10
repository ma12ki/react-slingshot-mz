import { combineReducers } from 'redux';

import { moduleName } from './constants';

//
// actions
//
export const ROUTE_NESTED = `${moduleName}/ROUTE_NESTED`;

//
// reducers
//
const showChildReducer = (state = false, action = {}) => {
  switch (action.type) {
    case ROUTE_NESTED: {
      return action.payload.child !== undefined;
    }
    default: {
      return state;
    }
  }
};

const childReducer = (state = '', action = {}) => {
  switch (action.type) {
    case ROUTE_NESTED: {
      return action.payload.child || '';
    }
    default: {
      return state;
    }
  }
};

const showGrandchildReducer = (state = false, action = {}) => {
  switch (action.type) {
    case ROUTE_NESTED: {
      return action.payload.grandchild !== undefined;
    }
    default: {
      return state;
    }
  }
};

const grandchildReducer = (state = '', action = {}) => {
  switch (action.type) {
    case ROUTE_NESTED: {
      return action.payload.grandchild || '';
    }
    default: {
      return state;
    }
  }
};

const reducer = combineReducers({
  showChild: showChildReducer,
  child: childReducer,
  showGrandchild: showGrandchildReducer,
  grandchild: grandchildReducer,
});

export default reducer;

//
// selectors
//
const moduleSel = (state) => state[moduleName];

export const showChildSel = (state) => moduleSel(state).showChild;
export const childSel = (state) => moduleSel(state).child;
export const showGrandchildSel = (state) => moduleSel(state).showGrandchild;
export const grandchildSel = (state) => moduleSel(state).grandchild;
