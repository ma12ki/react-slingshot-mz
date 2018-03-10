import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import { commentsSel } from '../../duck';

const CommentList = ({ comments, postId }) => {
  const commentNodes = comments.map(({ id, name, email, body }) => (
    <div key={id}>
      <h4>{name} ({email})</h4>
      <p>{body}</p>
    </div>
  ));

  return (
    <div>
      <Link to={`/posts/${postId}`}>back to post</Link>
      {commentNodes}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.number.isRequired,
};

const mapState = (state) => ({
  comments: commentsSel(state),
  postId: state.location.payload.id,
});

export default connect(mapState)(CommentList);
