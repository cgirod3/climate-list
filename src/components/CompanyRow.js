import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import CompanyName from './CompanyName';

import '../styles/components/CompanyRow.scss';

const CompanyRow = (props) => {
  const {
    link,
    logo: logoName,
    logoAlt,
    name,
    summary,
    apply_link
  } = props;

  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const logoFile = require(`../images/${logoName}`).default;
    setLogo(logoFile);
  }, [logoName]);

  return (
    <tr className="CompanyRow">
      <td><CompanyName name={ name } link={ link } /></td>
      <td className="CompanyRow-logo">
        <img className = "CompanyRow-logo-img"
          src={ logo }
          alt={ logoAlt }
        />
      </td>
      <td className="CompanyRow-summary">{ summary }</td>
      <td><CompanyName name={ name } link={ apply_link } /></td>
    </tr>
  );
};

CompanyRow.propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  apply_link: PropTypes.string.isRequired,

};

CompanyRow.defaultProps = {
  logoAlt: 'Cannot Display'
};

export default CompanyRow;
