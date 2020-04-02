import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
        <h1>Home Page</h1>
        <h4>Do stuff...</h4>
  </div>
);

export default connect()(Home);
