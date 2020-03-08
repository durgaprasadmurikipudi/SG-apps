import React from 'react';

import requireAuth from '../hoc/requireAuth';

const Feature = () => {
  return (
    <p>This is secret message!!</p>
  );
};

export default requireAuth(Feature);