import companyData from '../data/companies.json'

import '../styles/components/Company.css';

const Company = () => {

  const options = companyData["CompanyList"].map(company => {
    const { logo: logoName, name, summary } = company;
    const logo = require(`../images/${logoName}`).default;

    return (
      <tr className="table-row">
        <td className="table-company-name">{ name }</td>
        <td className="table-company-logo">
          <img className = "table-image"
            src={ logo }
            alt='cannot display'>
          </img>
        </td>
        <td className="table-company-summary">{ summary }</td>
      </tr>
    );
  });

  return (
    <div className="Company">
      <table className="Company-table">
        <tbody>
          <tr className="table-header-row">
            <th className="table-company-name">Name</th>
            <th className="table-company-logo">Logo</th>
            <th className="table-company-summary">Summary</th>
          </tr>
          { options }
        </tbody>
      </table>
    </div>
  );
};

export default Company;
