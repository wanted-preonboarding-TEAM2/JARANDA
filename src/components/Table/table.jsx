import styled from '@emotion/styled';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

const dataPropsMapper = {
  id: {
    title: '아이디',
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
    parseData: data =>
      data === 1 ? '학부모' : data === 2 ? '선생님' : '관리자',
  },
};

const Table = ({ dataProps, tableData }) => {
  return (
    <Container>
      <StyledTable>
        <thead>
          <TableHeader>
            {dataProps.map((props, index) => (
              <th key={`${props} ${index}`} className={`${props}_table`}>
                {dataPropsMapper[props].title}
              </th>
            ))}
          </TableHeader>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <TableRow key={index}>
              {dataProps.map((props, index) => (
                <TableData
                  key={`${props} ${index}`}
                  data={data[props]}
                  props={`${props}_table`}
                >
                  {dataPropsMapper[props].parseData(data[props])}
                </TableData>
              ))}
              <TableData key={`threeDots ${index}`}>
                <BsThreeDots color="#b2b9c8" />
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Table;

const Container = styled.div`
  width: 100%;
  /* background-color: #f8faff; */
`;
const StyledTable = styled.table`
  width: 100%;
  table-layout: fixed;
  padding: 0 8px;
  border-spacing: 0 8px;
`;

const TableHeader = styled.tr`
  height: 24px;
  font-size: 12px;
  white-space: nowrap;
  text-align: center;
  color: darkgray;
  text-align: center;

  .id_table {
    width: 15%;
  }

  .name_table {
    width: 15%;
  }

  .address_table {
    width: 20%;
  }

  .card_table {
    width: 20%;
  }

  .age_table {
    width: 10%;
  }

  .role_table {
    width: 15%;
  }

  .sibling_table {
    width: 5%;
  }

  @media screen and (min-width: 1280px) {
    th {
      padding: 1vh 12px;
    }
  }
`;

const TableRow = styled.tr`
  height: 56px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  background-color: white;
  border-radius: 10px;

  .id_table {
    width: 15%;
  }

  .name_table {
    width: 15%;
  }

  .address_table {
    width: 20%;
  }

  .card_table {
    width: 20%;
  }

  .age_table {
    width: 10%;
  }

  .role_table {
    width: 15%;
  }
  .sibling_table {
    width: 5%;
  }

  :hover {
    /* background-color: skyblue !important; */
  }
`;

const TableData = styled.td`
  padding: 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;

  border-bottom: 0.5px solid #edf1f9;
  border-top: 0.5px solid #edf1f9;
  :first-child {
    border-left: 0.5px solid #edf1f9;
    border-radius: 10px 0 0 10px;
  }
  :last-child {
    border-right: 0.5px solid #edf1f9;
    border-radius: 0 10px 10px 0;
  }
`;
