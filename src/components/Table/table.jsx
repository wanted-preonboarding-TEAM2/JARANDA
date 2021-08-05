import styled from '@emotion/styled';
import Dropdown from 'components/Dropdown/DropDown';
import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { setUserInfo } from 'services/LocalStorageWorker';

const dataPropsMapper = {
  id: {
    title: '아이디',
    parseData: data => data,
  },
  name: {
    title: '이름',
    parseData: data => data,
  },
  address: {
    title: '주소',
    parseData: data => data,
  },
  cardInfo: {
    title: '카드 번호',
    parseData: ({ cardNum }) =>
      `${cardNum.substr(0, 4)}-${cardNum.substr(4, 4)}-${cardNum.substr(
        8,
        4,
      )}-${cardNum.substr(12, 4)}`,
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

const Table = ({ dataProps, currentPageData, tableData, setTableData }) => {
  const handleEditUserRole = data => {
    setUserInfo(data);
    const newTableData = tableData;
    const index = tableData.findIndex(user => user.id === data.id);
    if (index !== -1) {
      newTableData[index] = data;
      setTableData([...newTableData]);
    }
  };

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
          {currentPageData.map((data, index) => (
            <TableRow key={index}>
              {dataProps.map((props, index) =>
                props === 'role' ? (
                  <TableData
                    key={`${props} ${index}`}
                    data={data[props]}
                    className={`${props}_table`}
                  >
                    <Dropdown
                      visibleOption={
                        dataPropsMapper[props].parseData(data[props]) === 1 ? (
                          <>
                            <StyledTag color="#389e0d">부모님</StyledTag>
                            <StyledArrowDown />
                          </>
                        ) : dataPropsMapper[props].parseData(data[props]) ===
                          2 ? (
                          <>
                            <StyledTag color="#096dd9">선생님</StyledTag>
                            <StyledArrowDown />
                          </>
                        ) : (
                          <>
                            <StyledTag color="#cf1322">관리자</StyledTag>
                            <StyledArrowDown />
                          </>
                        )
                      }
                      optionList={[1, 2, 3]}
                      onItemClick={value =>
                        handleEditUserRole({ ...data, role: value })
                      }
                      print={data =>
                        data === 1 ? '부모님' : data === 2 ? '선생님' : '관리자'
                      }
                    />
                  </TableData>
                ) : (
                  <TableData
                    key={`${props} ${index}`}
                    data={data[props]}
                    className={`${props}_table`}
                  >
                    {dataPropsMapper[props].parseData(data[props])}
                  </TableData>
                ),
              )}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </Container>
  );
};

export default Table;

const StyledTag = styled.span`
  background-color: ${props => props.color}22;
  border: 0.5px solid ${props => props.color}BE;
  font-weight: 600;
  color: ${props => props.color};
  font-size: 12px;
  padding: 3px 6px;
  border-radius: 5px;
`;

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

  .cardInfo_table {
    width: 20%;
  }

  .age_table {
    width: 10%;
  }

  .role_table {
    width: 10%;
  }

  .sibling_table {
    width: 10%;
  }
`;

const TableRow = styled.tr`
  height: 56px;
  font-size: 14px;
  text-align: center;
  white-space: nowrap;
  background-color: white;
  border-radius: 15px;

  .id_table {
    width: 15%;
  }

  .name_table {
    width: 15%;
  }

  .address_table {
    width: 20%;
  }

  .cardInfo_table {
    width: 20%;
  }

  .age_table {
    width: 10%;
  }

  .role_table {
    width: 10%;
  }
  .sibling_table {
    width: 10%;
  }

  :hover {
    /* background-color: #dce35b33; */
  }
`;

const StyledArrowDown = styled(RiArrowDownSFill)`
  width: 14px;
`;

const TableData = styled.td`
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;

  border-bottom: 0.5px solid #edf1f9;
  border-top: 0.5px solid #edf1f9;
  :first-of-type {
    border-left: 0.5px solid #edf1f9;
    border-radius: 15px 0 0 15px;
  }
  :last-of-type {
    overflow: initial;
    border-right: 0.5px solid #edf1f9;
    border-radius: 0 15px 15px 0;
    :hover {
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 4px;
  }
`;
