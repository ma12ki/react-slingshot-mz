import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';

import { moduleName as blogModuleName , reducers as blogReducers } from '../blog';
import { moduleName as nestedModuleName , reducers as nestedReducers } from '../nested';

//
// reducers
//
export default {
  [blogModuleName]: blogReducers,
  [nestedModuleName]: nestedReducers,
};

//
// epics
//
const dummyEpic = action$ => action$.ofType('NONEXISTENT').do(console.log);
export const epic$ = new BehaviorSubject(combineEpics(dummyEpic));
export const rootEpic = (action$, store) => epic$.mergeMap(epic => epic(action$, store));
