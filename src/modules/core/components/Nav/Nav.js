import React from 'react';
import { NavLink } from 'redux-first-router-link';

const activeStyle = { fontWeight: 'bold', textDecoration: 'underline' };

const Nav = () => {
  return (
    <ul>
      <li><NavLink to={'/'} activeStyle={activeStyle} exact>Home</NavLink></li>
      <li><NavLink to={'/posts'} activeStyle={activeStyle}>Blog (thunks)</NavLink></li>
      <li><NavLink to={'/nested'} activeStyle={activeStyle}>Nested routes</NavLink></li>
      <li><a href="/something-that-does-not-exist">404</a></li>
    </ul>
  );
};

export default Nav;
