import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = formValues => {
        console.log("StreamEdit onSubmit", formValues);
    }

    //console.log("StreamEdit props", props);
    render() { 
        if (!this.props.stream) {
            return <div>Loading ...</div>
        } 
        
        return (
            <div>
                <h3>StreamEdit</h3>
                <StreamForm 
                initialValues={this.props.stream}
                onSubmit={this.onSubmit} />
            </div>
        )
    };
};

const mapStateToProps = (state, ownProps) => {
    console.log("mapStateToProps ownProps", ownProps);
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);