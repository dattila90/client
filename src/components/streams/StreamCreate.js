import React from 'react';
import { Fields, reduxForm, Field } from 'redux-form';

class StreamCreate extends React.Component {

    renderInput(formProps) {
        return (
            <input 
                onChange={formProps.input.onChange} 
                value={formProps.input.value} 
            />
        );
    }

    render() {
        console.log("StreamCreate render", this.props);
        return (
            <form>
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput} />
            </form>
        );
    }
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);