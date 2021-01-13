import { v4 as uuidv4 } from 'uuid';

let percentsArray = [];
let rowArray = [];

const createPercent = (index, table, row) => {
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

const calculatePercentage = (table, row, column) => {
  let columns = column;
  for (let i = column; i > 0; i = i - 1) {
    columns = columns - 1;
    const percent = createPercent(columns, table, row);
    percentsArray.push({ id: uuidv4(), percent });
  }
  const res = percentsArray.reverse();
  percentsArray = [];
  return res;
};

export default calculatePercentage;
