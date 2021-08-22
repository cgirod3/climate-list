import React from 'react';

import companyData from '../data/companies.json'
import CompanyRow from './CompanyRow';

import '../styles/components/CompanyTable.scss';

const CompanyTable = () => {

  const CompanyRows = companyData["CompanyList"].map((company, i) => (
    <CompanyRow
      key={ i }
      link={ company.links.main }
      logo={ company.logo }
      name={ company.name }
      summary={ company.summary }
      apply_link={ company.links.apply }
    />
  ));

  return (
    <table className="CompanyTable">
      <tbody>
        <tr className="CompanyTable-header">
          <th>NAME</th>
          <th>LOGO</th>
          <th>SUMMARY</th>
          <th>APPLY</th>
        </tr>
        { CompanyRows }
      </tbody>
    </table>
  );
};

export default CompanyTable;
