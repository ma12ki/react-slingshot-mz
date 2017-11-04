// import { redirect } from 'redux-first-router';
import restoreScroll from 'redux-first-router-restore-scroll';
import qs from 'qs';

const options = {
  // onBeforeChange: (dispatch, getState, action) => {
  //   const { user, location: { routesMap } } = getState()
  //   const allowed = isAllowed(action.type, user, routesMap)
  //   if (!allowed) {
  //     dispatch(redirect({ type: 'LOGIN' }))
  //   }
  // },
  // onAfterChange: (dispatch, getState) => {
  //   const { type } = getState().location

  //   if (type === 'LOGIN') {
  //     setTimeout(() => alert(alertMessage), 1500)
  //   }
  // },
  querySerializer: qs,
  restoreScroll: restoreScroll()
};

export default options;
