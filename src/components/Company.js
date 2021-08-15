import companyData from '../data/companies.json'

import CompanyRow from './CompanyRow';

import '../styles/components/Company.css';

const Company = () => {

  const CompanyRows = companyData["CompanyList"].map(company => (
    <CompanyRow
      logo={ company.logo }
      name={ company.name }
      summary={ company.summary }
    />
  ));

  return (
    <div className="Company">
      <table className="Company-table">
        <tbody>
          <tr className="Company-table-header">
            <th>Name</th>
            <th>Logo</th>
            <th>Summary</th>
          </tr>
          { CompanyRows }
        </tbody>
      </table>
    </div>
  );
};

export default Company;
