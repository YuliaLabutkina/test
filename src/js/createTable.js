import { v4 as uuidv4 } from 'uuid';

const createRandomNumber = () => {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
};

const createRows = row => {
  const rowArray = [];
  for (let i = row; i > 0; i -= 1) {
    rowArray.push({ id: uuidv4(), number: createRandomNumber() });
  }
  return rowArray;
};

const createTable = (row, column) => {
  const tableArray = [];
  for (let i = column; i > 0; i -= 1) {
    tableArray.push(createRows(row));
  }
  return tableArray;
};

export default createTable;
