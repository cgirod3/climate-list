import React from 'react';

import companyData from '../data/companies.json'
import CompanyItem from './CompanyItem';

import '../styles/components/CompanyList.scss';

const CompanyList = () => {

  const CompanyItems = companyData["CompanyList"].map((company, i) => (
    <CompanyItem
      applyLink={ company.links.apply }
      key={ i }
      link={ company.links.main }
      logo={ company.logo }
      name={ company.name }
      summary={ company.summary }
    />
  ));

  return (
    <div className="CompanyList">
      { CompanyItems }
    </div>
  );
};

export default CompanyList;
