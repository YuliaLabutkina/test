import { v4 as uuidv4 } from 'uuid';

let averageArray = [];
let rowArray = [];

const createAverage = (index, table, row) => {
  for (let i = row; i > 0; i = i - 1) {
    const rows = table[i - 1];
    rowArray.push(rows[index].number);
  }
  const result = Math.round(
    rowArray.reduce((acc, value) => acc + value, 0) / row,
  );
  rowArray = [];
  return result;
};

const calculateAverage = (table, row, column) => {
  let columns = column;
  for (let i = column; i > 0; i = i - 1) {
    columns = columns - 1;
    const average = createAverage(columns, table, row);
    averageArray.push({ id: uuidv4(), average });
  }
  const res = averageArray.reverse();
  averageArray = [];
  return res;
};

export default calculateAverage;
