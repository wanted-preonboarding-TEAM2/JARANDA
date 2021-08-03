import SearchBox from 'components/Admin/SearchBox.jsx';
import Table from 'components/Table';
import React from 'react';
import userMockData from 'res/mock/userMockData.json';

const dataProps = ['id', 'name', 'address', 'card', 'age', 'role'];

export default function Admin() {
  return (
    <div>
      Admin
      <SearchBox />
      <Table dataProps={dataProps} tableData={userMockData} />
    </div>
  );
}
