import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import { postSel } from '../../duck';

const PostDetails = ({ id, title, body }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <Link to={`/posts/${id}/comments`}>comments</Link>
  </div>
);

PostDetails.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

PostDetails.defaultProps = {
  id: -1,
  title: '',
  body: '',
};

const mapState = (state) => ({
  ...postSel(state),
});

export default connect(mapState)(PostDetails);
