import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    //console.log("StreamEdit props", props);
    render() { 
        if (!this.props.stream) {
            return <div>Loading ...</div>
        } 
        
        return <div>StreamEdit {this.props.stream.title}</div>
    };
};

const mapStateToProps = (state, ownProps) => {
    console.log("mapStateToProps ownProps", ownProps);
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream })(StreamEdit);