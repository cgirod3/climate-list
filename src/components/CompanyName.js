import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/CompanyName.scss';

const CompanyName = (props) => {
  const {
    link,
    text
  } = props;

  return (
    <a
      className='CompanyName'
      href={ link }
      rel="noreferrer"
      target='_blank'
    >
      <span className='CompanyName-text'>{ text }</span>
    </a>
  );
};

CompanyName.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CompanyName;
