import React from 'react';
import Background from '../../src/assets/trianglify.png';

const LandingPage = function (props) {
  return (
    <div>
      <h1 style={{ backgroundImage: `url(${Background})` }}>THIS IS THE LANDING PAGE</h1>
    </div>
  );
};

export default LandingPage;
