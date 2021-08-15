import React from 'react';

import '../styles/components/Header.scss';

const Header = () => {
  return (
    <div className='Header'>
      <h1 className='Header-text'>The GreenTech List</h1>
      <div className='Header-quote'>
        <div className='Header-quote-text'>
          "Your work is going to fill a large part of your life,
          and the only way to be truly satisfied is to do what you believe is great work."
        </div>
        - Steve Jobs
      </div>
    </div>
  );
};

export default Header;
