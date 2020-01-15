import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            console.log("renderError", error);
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        console.log("render", meta);
        
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues) {
        console.log("onSubmit", formValues);
    }

    render() {
        console.log("StreamCreate render", this.props);

        return (
            <form 
                onSubmit={this.props.handleSubmit(this.onSubmit)} 
                className="ui form error">
                <Field 
                    name="title" 
                    component={this.renderInput} 
                    label="Enter Title" 
                />
                <Field 
                    name="description" 
                    component={this.renderInput} 
                    label="EnterDescription" 
                />
                <button className="ui button primary">Save</button>
            </form>
        );
    }
};

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "Title field is empty!";
    }

    if (!formValues.description) {
        errors.description = "Description field is empty!";
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);