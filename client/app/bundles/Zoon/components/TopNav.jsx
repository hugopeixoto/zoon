import React, { PropTypes } from 'react';
import * as F from 'react-foundation';
import { Link } from 'react-router'
import { connect } from 'react-redux';

import * as authActions from '../actions/auth';

const TopNav = ({ auth, authLogout }) => {
  if (auth.id) {
    var items = [
      <F.MenuItem key={0}>
        <Link onClick={() => authLogout(auth.csrf)}>Log Out</Link>
        <Link to="/account">My Account</Link>
      </F.MenuItem>
    ]
  } else {
    var items = [
      (<F.MenuItem key={0}><Link to="/users/sign_in">Sign In</Link></F.MenuItem>),
      (<F.MenuItem key={1}><Link to="/users/sign_up">Sign Up</Link></F.MenuItem>),
    ]
  }
  return (
<F.Row className="main-header">
  <F.TopBar>
    <F.TopBarLeft>
      <F.Menu>
        <F.MenuItem><Link to="/">ZOÖN</Link></F.MenuItem>
        <F.MenuItem><Link to="/modules">MODULES</Link></F.MenuItem>
        <F.MenuItem><Link to="/workflows">WORKFLOWS</Link></F.MenuItem>
      </F.Menu>
    </F.TopBarLeft>
    <F.TopBarRight>
      <F.Menu>
        { items }
      </F.Menu>
    </F.TopBarRight>
  </F.TopBar>
</F.Row>
  );
};

export default connect(
  (state) => ({
    auth: state.auth,
  }),
  {
    ...authActions,
  })(TopNav);
