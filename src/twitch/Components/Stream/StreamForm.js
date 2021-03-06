import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { createStream } from '../../actions';

class StreamForm extends Component {

  renderInput(formProps) {    
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        <div className="ui field error">{formProps.meta.error && formProps.meta.touched && formProps.meta.error}</div>
      </div>

    );
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" label="title" component={this.renderInput} />
        <Field name="description" label="description"  component={this.renderInput} />
        <button type="submit" className="ui primary button">Submit</button>
      </form>
    )
  }
}


const validate = formValues => {
  const errors = {};

  if(!formValues.title) errors.title = 'You must enter a title';

  if(!formValues.description) errors.description = 'You must enter a description';

  return errors;
}

const formWrapped =  reduxForm({
  form: 'StreamForm',
  validate
})(StreamForm);

export default connect(null, { createStream })(formWrapped);