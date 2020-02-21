import React from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import Modal from '../../Modal';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  constructor(props) {
    super(props);
    this.actionsSection = (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</button>
        <button onClick={() => history.push('/')} className="ui button">Cancel</button>
      </React.Fragment>
    )
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent = () => {
    if(!this.props.stream) return 'Are you sure you want to delete this stream?';
    
    return `Are you sure want to delete this stream ${this.props.stream.title}`
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actionsSection={this.actionsSection}
          onDismiss={() => history.push('/')}
         />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);