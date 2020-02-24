import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends React.Component {

  render() {
    return (
      <div>
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

export default App;