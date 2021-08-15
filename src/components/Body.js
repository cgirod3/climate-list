import React from 'react';

import CompanyTable from './CompanyTable';

import '../styles/components/Body.scss';

const Body = () => {
  return (
    <div className='Body'>
      <span className='Body-goal'>
        Climate Change is the most pressing issue facing the world today.
        This page is intended to be a resource to connect those interested
        in fixing the problem with companies actively working on solutions.
      </span>
      <CompanyTable />
    </div>
  );
};

export default Body;
