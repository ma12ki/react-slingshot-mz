/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import { NOT_FOUND } from 'redux-first-router';

import { routes as blogRoutes } from '../modules/blog';
import { components } from '../modules/core';

export default {
  ...blogRoutes,
  [NOT_FOUND]: {
    component: () => <components.NotFound />
  },
};
