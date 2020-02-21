import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

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
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/:id" exact component={StreamView} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  )
};

export default App;