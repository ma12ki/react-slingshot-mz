import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { postsSel } from '../../duck';
import PostItem from '../PostItem';

const PostList = ({ posts }) => {
  const postNodes = posts.map(({ id, title }) => <PostItem key={id} id={id} title={title} />);

  return (
    <div>
      {postNodes}
    </div>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

const mapState = (state) => ({
  posts: postsSel(state),
});

export default connect(mapState)(PostList);
