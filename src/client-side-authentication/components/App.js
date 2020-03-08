import React from 'react';

import Header from './Header';

const App = ({ children }) => {
  return (
    <div>
      <div>Client auth app!</div>
      <Header />
      {children}
    </div>
  );
};

export default App;