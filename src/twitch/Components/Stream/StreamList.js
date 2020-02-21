import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();    
  }

  renderCreateStreamLink = () => {
    if(this.props.isSignedIn) {
      return (
        <Link className="ui primary button" to="/streams/new">Create stream</Link>
      );
    }
  }

  renderAdmin = stream => {
    if(stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
          <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
        </div>
      );
    }
    return null;
  }

  renderStreamsList = () => {
    console.log(Object.values(this.props.streams));
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id} >
          {this.renderAdmin(stream)}
          <i className="large middle aligned camera icon"></i>
          <div className="content">
            <Link to={`streams/${stream.id}`}>{stream.title}</Link>
            <div className="description">{stream.description}</div>
          </div>          
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreamsList()}</div>
        <div style={{textAlign: 'right'}}>{this.renderCreateStreamLink()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);