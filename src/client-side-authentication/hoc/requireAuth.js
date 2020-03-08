import React from 'react';
import { connect } from 'react-redux';

const requireAuth = ChildComponent => {
  class ComposedComponent extends React.Component {
    componentWillUpdate() {
      this.shouldNavigateAway();
    }

    componentWillMount() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    render() {
      return (
        <ChildComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = state => ({ auth: state.auth.authenticated});

  return connect(mapStateToProps, null)(ComposedComponent);
}

export default requireAuth;