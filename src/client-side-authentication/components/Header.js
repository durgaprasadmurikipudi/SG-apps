import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import './Header.css'

class Header extends React.Component {
  renderLinks() {
    const auth = this.props.auth;

    if(auth) {
      return (
        <div>
          <Link to="/feature">Feature</Link>
          <Link to="/signOut">SignOut</Link>
        </div>
      );
    }
    else return (
      <div>
        <Link to="/signIn">Sign In</Link>
        <Link to="/signUp">Sign Up</Link>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="header">
          <Link to="/">Redux Auth</Link>
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ( { auth: state.auth.authenticated })

export default connect(mapStateToProps, null)(Header);
