/* eslint-disable import/default */

import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { store as configureStore } from './root';
import { components } from './modules/core';
// import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
require('./favicon.ico'); // Tell webpack to load favicon.ico

const store = configureStore();

render(
  <AppContainer>
    <components.Main store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./modules/core/components/Main/Main', () => {
    const NewMain = require('./modules/core/components/Main/Main').default;
    render(
      <AppContainer>
        <NewMain store={store} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
