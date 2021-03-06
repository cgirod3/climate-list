import React from 'react';

import CompanyList from './CompanyList';
import CompanyTable from './CompanyTable';
import { DEVICES } from '../constants/viewport';
import useDevice from '../hooks/useDevice';

const Companies = () => {
  const device = useDevice();

  const CompanyComponent = device === DEVICES.DESKTOP ? CompanyTable : CompanyList;

  return (
    <CompanyComponent />
  );
};

export default Companies;
