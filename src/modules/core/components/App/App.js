/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import routes from '../../routes';
import Nav from '../Nav';
import ModuleLoader from '../ModuleLoader';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

export class App extends Component {
  render() {
    const { page } = this.props;
    const { asyncModule, component } = routes[page];

    return (
      <div>
        <Nav />
        {asyncModule ?
          <ModuleLoader loaderFn={asyncModule} componentName={component} /> :
          component
        }
      </div>
    );
  }
}

App.propTypes = {
  page: PropTypes.string,
};

const mapStateToProps = (state) => ({
  page: state.location.type,
});

export default connect(mapStateToProps)(App);
