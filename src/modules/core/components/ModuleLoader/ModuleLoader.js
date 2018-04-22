import React from 'react';
import PropTypes from 'prop-types';
import { combineReducers } from 'redux';

import { default as store, rootReducer } from '../../store';
import { epic$ } from '../../duck';

class ModuleLoader extends React.Component {
  state = {
    loading: true,
    asyncModule: {},
  }

  componentDidMount() {
    this.loadAsyncModule(this.props.loaderFn);
  }

  componentWillReceiveProps = ({ loaderFn }) => {
    if (loaderFn !== this.props.loaderFn) {
      this.loadAsyncModule(loaderFn);
    }
  }

  loadAsyncModule = async (loaderFn) => {
    this.setState({ asyncModule: {}, loading: true });
    const asyncModule = await loaderFn();
    installModule(asyncModule);
    this.setState({ asyncModule, loading: false });
  }

  render() {
    const { componentName } = this.props;
    const { loading, asyncModule } = this.state;

    if (loading) {
      return 'loading module...';
    }
    const Component = asyncModule[componentName];
    return <Component />;
  }
}

const installModule = ({ moduleName, reducers, epics }) => {
  if (!store.installedAsyncModules[moduleName]) {
    store.installedAsyncModules[moduleName] = true;
    if (reducers) {
      store.asyncReducers[moduleName] = reducers;
      installReducers(moduleName, reducers);
    }
    if (epics) {
      installEpics(moduleName, epics);
    }
  }
};

const installReducers = (moduleName, reducers) => {
  store.replaceReducer(combineReducers({
    ...rootReducer,
    ...store.asyncReducers,
    [moduleName]: reducers,
  }));
};

const installEpics = (moduleName, epics) => {
  epic$.next(epics);
};

ModuleLoader.propTypes = {
  loaderFn: PropTypes.func.isRequired,
  componentName: PropTypes.string.isRequired,
};

export default ModuleLoader;
