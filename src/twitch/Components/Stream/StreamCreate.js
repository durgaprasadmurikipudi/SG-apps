import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

  renderInput(formProps) {    
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input {...formProps.input} />
        <div>{formProps.meta.error && formProps.meta.touched && formProps.meta.error}</div>
      </div>

    );
  }

  onSubmit(formValues) {
    console.log(formValues);
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

export default reduxForm({
  form: 'StreamCreate',
  validate
})(StreamCreate);