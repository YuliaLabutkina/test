import { v4 as uuidv4 } from 'uuid';

const createRandomNumber = () => {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
};

const createColumn = column => {
  const columnArray = [];
  for (let i = column; i > 0; i -= 1) {
    columnArray.push({ id: uuidv4(), number: createRandomNumber() });
  }
  return columnArray;
};

const createTable = (row, column) => {
  const tableArray = [];
  for (let i = row; i > 0; i -= 1) {
    tableArray.push(createColumn(column));
  }
  return tableArray;
};

export default createTable;
