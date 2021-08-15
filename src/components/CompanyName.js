import PropTypes from 'prop-types';
import React from 'react';

// import '../styles/components/CompanyName.css';

const CompanyName = (props) => {
  const {
    link,
    name
  } = props;

  return (
    <td className="CompanyName">
      <a className='CompanyName-link' href={ link } target='_blank'>
        { name }
      </a>
    </td>
  );
};

CompanyName.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired

};

export default CompanyName;
