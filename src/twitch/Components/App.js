import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div>
      <Route path='/' component={() => <div>Route 1 <Link to='/pageTwo'>Page 2</Link></div>} exact></Route>
      <Route path='/pageTwo' component={() => <div>Route 1 <Link to='/'>Page 1</Link><Link to='/pageThree'>Page 3</Link></div>} exact></Route>      
      <Route path='/pageThree' component={() => <div>Route 1 <a href='/pageTwo'>Page 1</a></div>} exact></Route>      

    </div>
  </BrowserRouter>
);

export default App;