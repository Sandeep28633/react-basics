import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
        <Field
          name="title"
          component={this.renderInput}
          type="text"
          label="Enter Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          type="text"
          label="Enter Description"
        />
        <button type="submit" className="ui button primary">
          Submit
        </button>
        <button
          type="button"
          className="ui button secondary"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) errors.title = "You must enter a title";
  if (!formValues.description)
    errors.description = "You must enter a description";
  return errors;
};

export default reduxForm({
  form: "StreamForm",
  validate,
})(StreamForm);
