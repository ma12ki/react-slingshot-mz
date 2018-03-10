import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import { showChildSel } from '../../duck';
import Child from '../Child';

class Parent extends React.Component {

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('Parent mounted');
  }

  render() {
    const { showChild } = this.props;
    return (
      <div>
        <h1>I'm the parent</h1>
        <Link to={`/nested/someChild`}>show child</Link>
        <br />
        <Link to={`/nested/someChild/someGrandchild`}>show child and grandchild</Link>
        {showChild && <Child />}
      </div>
    );
  }
}

Parent.propTypes = {
  showChild: PropTypes.bool.isRequired,
};

const mapState = (state) => ({
  showChild: showChildSel(state),
});

export default connect(mapState)(Parent);
