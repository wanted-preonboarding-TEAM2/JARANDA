import styled from '@emotion/styled';
import Dropdown from 'components/Dropdown/DropDown';
import React from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import { BsFillInboxFill } from 'react-icons/bs';
import { setUserInfo } from 'services/utils/LocalStorageWorker';
import USER from 'constants/user';
import ROLE, { ROLE_KR } from 'constants/role';

const dataPropsMapper = {
  id: {
    title: USER.KO.ID,
    parseData: data => data,
  },
  name: {
    title: USER.KO.NAME,
    parseData: data => data,
  },
  address: {
    title: USER.KO.ADDRESS,
    parseData: data => data,
  },
  cardInfo: {
    title: USER.KO.CARD_NUMBER,
    parseData: ({ cardNum }) =>
      `${cardNum.substr(0, 4)}-${cardNum.substr(4, 4)}-${cardNum.substr(
        8,
        4,
      )}-${cardNum.substr(12, 4)}`,
  },
  age: {
    title: USER.KO.AGE,
    parseData: data => data,
  },
  role: {
    title: USER.KO.ROLE,
    parseData: data => data,
  },
};

const roleList = [ROLE.PARENT, ROLE.TEACHER, ROLE.ADMIN];

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

  return tableData.length === 0 ? (
    <EmptyContainer>
      <BsFillInboxFill />
      <EmptyMessage>검색 결과가 없습니다.</EmptyMessage>
    </EmptyContainer>
  ) : (
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
                      visibleOption={renderUserRoleTag(
                        dataPropsMapper[props].parseData(data[props]),
                      )}
                      optionList={roleList}
                      onItemClick={value =>
                        handleEditUserRole({ ...data, role: value })
                      }
                      print={roleToKor}
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

const roleToKor = data =>
  data === ROLE.PARENT
    ? ROLE_KR.PARENT
    : data === ROLE.TEACHER
    ? ROLE_KR.TEACHER
    : ROLE_KR.ADMIN;

const renderUserRoleTag = data => {
  const korData = roleToKor(data);
  const color =
    korData === ROLE_KR.PARENT
      ? '#389e0d'
      : korData === ROLE_KR.TEACHER
      ? '#096dd9'
      : '#cf1322';

  return (
    <>
      <StyledTag color={color}>{korData}</StyledTag>
      <StyledArrowDown />
    </>
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

const EmptyContainer = styled.div`
  padding: 5vh 0;
  vertical-align: center;
  text-align: center;
  font-size: 15vh;
  color: darkgray;
`;

const EmptyMessage = styled.p`
  font-size: 1.5vh;
  color: #333;
`;

const Container = styled.div`
  width: 100%;
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
