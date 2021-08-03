import styled from '@emotion/styled';
import React from 'react';

const dataPropsMapper = {
  id: {
    title: 'ID',
    parseData: data => data,
  },
  name: {
    title: '이름',
    parseData: data => data,
  },
  //   uid: {
  //     title: '이름',
  //     parseData: data => data,
  //   },
  address: {
    title: '주소',
    parseData: data => data,
  },
  card: {
    title: '카드 번호',
    parseData: data => data,
  },
  age: {
    title: '나이',
    parseData: data => data,
  },
  role: {
    title: '권한',
    parseData: data => data,
  },
};

const Table = ({ dataProps, tableData }) => {
  return (
    <div>
      <table>
        <thead>
          <TableHeader>
            {dataProps.map((props, index) => (
              <th key={index}>{dataPropsMapper[props].title}</th>
            ))}
          </TableHeader>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              {dataProps.map((props, index) => (
                <td key={index} data={data[props]} props={props}>
                  {dataPropsMapper[props].parseData(data[props])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const TableHeader = styled.tr``;
