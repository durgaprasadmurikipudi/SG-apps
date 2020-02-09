import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

import { CLIENT_ID } from '../Constants/AppKeys';

class GoogleAuth extends Component {

  constructor() {
    super();
    
    this.auth = { isSignedIn: {
      get: () => (false)
    }};
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: CLIENT_ID,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.authOnChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.authOnChange);
      }).catch(error => console.log(error));
    });
  }

  signIn = isYes => {
    if(isYes) this.auth.signIn();
    else this.auth.signOut();
  };

  renderAuthButton(isSignedIn) {
    if(isSignedIn) return (
      <button className="ui red google button" onClick={() => this.signIn(false)}>
        <i className="google icon"></i>Sign out!
      </button>
    );
    else return (
       <button className="ui primary google button" onClick={() => this.signIn(true)}>
         <i className="google icon"></i>Sign in!
       </button>
    );
  };

  authOnChange = isSignedIn => {
    isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
  };
  
  render() {
    const { isSignedIn } = this.props;
    return (
      <>
        {this.renderAuthButton(isSignedIn)}
      </>
    );
  };
};

const mapStateToProps = state => ({ isSignedIn: state.auth.isSignedIn });

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
