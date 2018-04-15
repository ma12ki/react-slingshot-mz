import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { asyncRequest, dataSel, loadingSel } from '../../duck';
import styles from './AsyncPage.css';

class AsyncPage extends React.PureComponent {

  componentDidMount() {
    this.props.onAsyncRequest();
  }

  render() {
    const { data, loading } = this.props;
    return (
      <div className={styles.content}>
        {loading ? 'loading...' : data}
      </div>
    );
  }
}

AsyncPage.propTypes = {
  data: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  onAsyncRequest: PropTypes.func.isRequired,
};

const mapState = state => ({
  data: dataSel(state),
  loading: loadingSel(state),
});

const mapDispatch = dispatch => ({
  onAsyncRequest: () => dispatch(asyncRequest()),
});

export default connect(mapState, mapDispatch)(AsyncPage);
