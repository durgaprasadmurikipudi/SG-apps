import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../Components/Header';
import StreamCreate from './Stream/StreamCreate';
import StreamEdit from './Stream/StreamEdit';
import StreamDelete from './Stream/StreamDelete';
import StreamView from './Stream/StreamView';
import StreamList from './Stream/StreamList';

const App = () => {
  return (
    <div className="ui container">
    <Header />
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/view" exact component={StreamView} />
          <Route path="/streams/delete" exact component={StreamDelete} />
        </div>
      </BrowserRouter>
    </div>
  )
};

export default App;