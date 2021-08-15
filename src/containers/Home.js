import React from 'react';

import Body from '../components/Body';
import Header from '../components/Header';

import '../styles/containers/Home.css';

const Home = (props) => {
  return (
    <div className='Home'>
      <Header />
      <Body />
    </div>
  );
};

export default Home;
