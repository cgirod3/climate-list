import React from 'react';

import { DEVICES } from '../constants/viewport';
import useDevice from '../hooks/useDevice';

import '../styles/components/Header.scss';

const Header = () => {
  const isMobile = useDevice() === DEVICES.MOBILE;

  return (
    <div
      className='Header'
      style={{
        ...(isMobile ?
          { alignItems: 'center', flexDirection: 'column', marginBottom: '30px' } :
          { marginBottom: '60px' }
        )
      }}
    >
      <h1
        className='Header-text'
        style={{
          ...(isMobile ?
            { margin: 0 } :
            { marginBottom: 0, 'width': '40%' }
          )
        }}
      >
        The GreenTech List
      </h1>
      { !isMobile &&
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
