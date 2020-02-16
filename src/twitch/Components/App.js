import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from '../Components/Header';
import StreamCreate from './Stream/StreamCreate';
import StreamEdit from './Stream/StreamEdit';
import StreamDelete from './Stream/StreamDelete';
import StreamView from './Stream/StreamView';
import StreamList from './Stream/StreamList';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">    
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/view" exact component={StreamView} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </Router>
    </div>
  )
};

export default App;