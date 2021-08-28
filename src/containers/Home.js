import React from 'react';

import Body from '../components/Body';
import { DEVICES } from '../constants/viewport';
import Header from '../components/Header';
import useDevice from '../hooks/useDevice';

import '../styles/containers/Home.scss';

const Home = (props) => {
  const isMobile = useDevice() === DEVICES.MOBILE;

  return (
    <div
      className='Home'
      style={{
        padding: isMobile ? '30px 20px 20px' : '50px 20px',
        ...(!isMobile && {
          margin: 'auto',
          width: '75%'
        })
      }}
    >
      <Header />
      <Body />
    </div>
  );
};

export default Home;
