/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React from 'react';

import { ROUTE_HOME } from './duck';
import { Home } from './components';

const routes = {
  [ROUTE_HOME]: {
    path: '/',
    component: <Home />,
  },
};

export default routes;
