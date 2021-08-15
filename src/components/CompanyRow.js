import PropTypes from 'prop-types';
import React from 'react';

import CompanyName from './CompanyName';

import '../styles/components/CompanyRow.scss';

const CompanyRow = (props) => {
  const {
    link,
    logo: logoName,
    logoAlt,
    name,
    summary
  } = props;

  const logo = require(`../images/${logoName}`).default;

  return (
    <tr className="CompanyRow">
      <CompanyName name={ name } link={ link } />
      <td className="CompanyRow-logo">
        <img className = "CompanyRow-logo-img"
          src={ logo }
          alt={ logoAlt }
        />
      </td>
      <td className="CompanyRow-summary">{ summary }</td>
    </tr>
  );
};

CompanyRow.propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,

};

CompanyRow.defaultProps = {
  logoAlt: 'Cannot Display'
};

export default CompanyRow;
