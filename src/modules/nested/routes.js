/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React from 'react';

import { ROUTE_NESTED } from './duck';
import { Parent } from './components';

const routes = {
  [ROUTE_NESTED]: {
    path: '/nested/:child?/:grandchild?',
    component: () => <Parent />,
  },
};

export default routes;
