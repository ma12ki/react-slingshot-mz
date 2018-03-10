/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import { NOT_FOUND } from 'redux-first-router';

import { routes as blogRoutes } from '../blog';
import { routes as dashboardRoutes } from '../dashboard';
import { routes as nestedRoutes } from '../nested';
import { NotFound } from '../shared';

const importAsyncModule = () => import('../+async');

export default {
  ...blogRoutes,
  ...dashboardRoutes,
  ...nestedRoutes,
  'async/ROUTE_ASYNC': {
    path: '/async',
    asyncModule: importAsyncModule,
    component: 'AsyncPage',
  },
  [NOT_FOUND]: {
    component: () => <NotFound />
  },
};
