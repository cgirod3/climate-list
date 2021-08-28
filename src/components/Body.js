import React from 'react';

import Companies from './Companies';
import { DEVICES } from '../constants/viewport';
import useDevice from '../hooks/useDevice';

import '../styles/components/Body.scss';

const Body = () => {
  const isMobile = useDevice() === DEVICES.MOBILE;

  return (
    <div className='Body'>
      <span
        className='Body-goal'
        style={{
          ...(!isMobile && {
            width: '70%'
          })
        }}
      >
        Climate Change is the most pressing issue facing the world today.
        This page is intended to be a resource to connect those interested
        in fixing the problem with companies actively working on solutions.
      </span>
      <Companies />
    </div>
  );
};

export default Body;
