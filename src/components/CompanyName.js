import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/CompanyName.scss';

const CompanyName = (props) => {
  const {
    link,
    name
  } = props;

  return (
    <a
      className='CompanyName'
      href={ link }
      rel="noreferrer"
      target='_blank'
    >
      <span className='CompanyName-text'>{ name }</span>
    </a>
  );
};

CompanyName.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired

};

export default CompanyName;
