import React from 'react';

import { DEVICES } from '../constants/viewport';
import useDevice from '../hooks/useDevice';

import '../styles/components/Header.scss';

const Header = () => {
  const isDesktop = useDevice() === DEVICES.DESKTOP;

  return (
    <div
      className='Header'
      style={{
        ...(isDesktop ?
          { marginBottom: '60px' } :
          { alignItems: 'center', flexDirection: 'column', marginBottom: '30px' }
        )
      }}
    >
      <h1
        className='Header-text'
        style={{
          ...(isDesktop ?
            { marginBottom: 0, 'width': '40%' } :
            { margin: 0 }
          )
        }}
      >
        The GreenTech List
      </h1>
      { isDesktop &&
        <div className='Header-quote'>
          <div className='Header-quote-text'>
            "Your work is going to fill a large part of your life,
            and the only way to be truly satisfied is to do what you believe is great work."
          </div>
          - Steve Jobs
        </div>
      }
    </div>
  );
};

export default Header;
