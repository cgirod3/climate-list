import companyData from '../data/companies.json'

import CompanyRow from './CompanyRow';

import '../styles/components/CompanyTable.css';

const CompanyTable = () => {

  const CompanyRows = companyData["CompanyList"].map(company => (
    <CompanyRow
      link={ company.website }
      logo={ company.logo }
      name={ company.name }
      summary={ company.summary }
    />
  ));

  return (
    <table className="CompanyTable">
      <tbody>
        <tr className="CompanyTable-header">
          <th>Name</th>
          <th>Logo</th>
          <th>Summary</th>
        </tr>
        { CompanyRows }
      </tbody>
    </table>
  );
};

export default CompanyTable;
