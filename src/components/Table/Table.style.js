import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  max-width: calc(100vw - 48px);
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
`;

const NumberTable = styled.table`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

const AmountAndPercent = styled.td`
  background-color: #e9967a;
  padding: 10px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #dcdcdc;
  }
`;

const TableCell = styled.td`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${props => props.color && '#cd5c5c'};
  &:hover {
    background-color: #cd5c5c;
  }
`;

const TableDel = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #b22222;
`;

const Percent = styled.span`
  position: absolute;
  top: 75%;
  background-color: #cd5c5c;
`;

export {
  Container,
  TableRow,
  TableCell,
  NumberTable,
  AmountAndPercent,
  TableDel,
  Percent,
};
