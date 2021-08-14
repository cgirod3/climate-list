import logo from './logo.svg';
import './Company.css';
import CompanyData from './Companies.json'

function Company() {
  const options = []

  for (let i = 0; i < 2; i++) {
    var company_data = CompanyData["CompanyList"][i]
    options.push(
      <tr className="table-row">
        <td className="table-company-name">{company_data["name"]}</td>
        <td className="table-company-logo">
          <img className = "table-image" 
            src={require(`./img/${company_data['logo']}`).default} 
            alt='cannot display'>
          </img>
        </td>

        <td className="table-company-summary">{CompanyData["CompanyList"][i]["summary"]}</td>
      </tr>
    )
  }
  return (
    <div className="Company">
      <header className="Company-header">
        <p>
          Edit <code>src/Company.js</code> and save to reload.
        </p>
        <a
          className="Company-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>

      <table className="Company-table">
        <tbody>
          <tr className="table-header-row">
            <th className="table-company-name">Name</th>
            <th className="table-company-logo">Logo</th>
            <th className="table-company-summary">Summary</th>
          </tr>
          {options}
        </tbody>
      </table>
    </div>
  );
}

export default Company;
