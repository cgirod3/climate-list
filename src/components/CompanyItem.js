import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import CompanyName from './CompanyName';

import '../styles/components/CompanyItem.scss';

const CompanyItem = (props) => {
  const {
    link,
    logo: logoName,
    logoAlt,
    name,
    summary,
    applyLink
  } = props;

  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const logoFile = require(`../images/${logoName}`).default;
    setLogo(logoFile);
  }, [logoName]);

  return (
    <div className='CompanyItem'>
      <div className='CompanyItem-head'>
        <CompanyName link={ link } text={ name } />
        <img className = 'CompanyItem-logo-img'
          src={ logo }
          alt={ logoAlt }
        />
      </div>
      <span className='CompanyItem-summary'>{ summary }</span>
      <CompanyName link={ applyLink } text='Careers' />
    </div>
  );
};

CompanyItem.propTypes = {
  applyLink: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired

};

CompanyItem.defaultProps = {
  logoAlt: 'Cannot Display'
};

export default CompanyItem;
