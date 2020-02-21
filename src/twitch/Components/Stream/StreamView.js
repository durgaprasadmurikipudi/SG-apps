import React from 'react'
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.id);
  }

  render() {
    if(!this.props.stream) return 'Loading....';

    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream})(StreamView);