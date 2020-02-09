import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {

  renderInput(formProps) {
    console.log(formProps.input)
    return <input {...formProps.input} />
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    )
  }
}


export default reduxForm({
  form: 'StreamCreate'
})(StreamCreate);