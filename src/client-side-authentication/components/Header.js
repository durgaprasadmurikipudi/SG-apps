import React from 'react';

import { Link } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/reduxAuth">Redux Auth</Link>
        <Link to="/signIn">Sign In</Link>
        <Link to="/signUp">Sign Up</Link>
        <Link to="/feature">Feature</Link>
      </div>
    );
  }
}

export default Header;