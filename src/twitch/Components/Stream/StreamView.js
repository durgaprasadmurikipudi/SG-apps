import React from 'react'
import { connect } from 'react-redux';
import flv from 'flv.js';

import { fetchStream } from '../../actions';

class StreamView extends React.Component {
  constructor(props) {
    super(props);
    this.videoStreamingRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildStream();
  }

  componentDidUpdate() {
    this.buildStream();
  }

  componentWillUnmount() {
    if(this.player) {
      this.player.destroy();
    } 
  }

  buildStream = () => {
    if(this.player || !this.props.stream) 
      return;

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });
    if(this.videoStreamingRef.current) {
      this.player.attachMediaElement(this.videoStreamingRef.current);
      this.player.load();
    }
  }

  render() {
    if(!this.props.stream) return 'Loading....';

    return (
      <div>
        <video ref={this.videoStreamingRef} controls style={{width: '100%'}} /> 
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