import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { signIn } from '../actions';

const Signin = props => {

  const onSubmit = fromProps => {
    props.signIn(fromProps, () => {
      props.history.push('/feature');
    });
  }

  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field name="password" type="password" component="input" />
      </fieldset>
      <button>Signin!</button>
      {props.errorMessage}
    </form>
  );
};

const mapStateToProps = state => ({ errorMessage: state.auth.errorMessage});

export default compose( connect(mapStateToProps, { signIn }), reduxForm({ form: 'signIn'}))(Signin);