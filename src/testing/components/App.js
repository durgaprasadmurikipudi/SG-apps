import React from 'react';
import CommentBox from 'testing/components/CommentBox';
import CommentList from 'testing/components/CommentList';

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