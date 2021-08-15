import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/CompanyRow.css';

const CompanyRow = (props) => {
  const {
    logo: logoName,
    logoAlt,
    name,
    summary
  } = props;

  const logo = require(`../images/${logoName}`).default;

  return (
    <tr className="CompanyRow">
      <td className="CompanyRow-name">{ name }</td>
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
  logo: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

CompanyRow.defaultProps = {
  logoAlt: 'Cannot Display'
};

export default CompanyRow;
