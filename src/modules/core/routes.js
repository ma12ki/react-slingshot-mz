/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import { NOT_FOUND } from 'redux-first-router';

import { routes as blogRoutes } from '../blog';
import { routes as dashboardRoutes } from '../dashboard';
import { routes as nestedRoutes } from '../nested';
import { NotFound } from '../shared';

export default {
  ...blogRoutes,
  ...dashboardRoutes,
  ...nestedRoutes,
  [NOT_FOUND]: {
    component: () => <NotFound />
  },
};
