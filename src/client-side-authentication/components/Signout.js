import React from 'react';
import { signOut } from '../actions';
import { connect } from 'react-redux';

const Signout = props => {
  props.signOut();

  return (
    <h1>So sorry you to go!!</h1>
  );
}

export default connect(null, { signOut })(Signout);