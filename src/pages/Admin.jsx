import React from 'react';
import SearchBox from 'components/admin/SearchBox.jsx';
import PageList from 'components/admin/PageList.jsx';

export default function Admin() {
  return (
    <div>
      Admin
      <SearchBox />
      <PageList />
    </div>
  );
}
