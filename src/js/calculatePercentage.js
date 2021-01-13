import { v4 as uuidv4 } from 'uuid';

let percentsArray = [];
let columnArray = [];

const createPercent = (index, table, column) => {
  for (let i = column; i > 0; i = i - 1) {
    const columns = table[i - 1];
    columnArray.push(columns[index].number);
  }
  const result = Math.round(
    columnArray.reduce((acc, value) => acc + value, 0) / column,
  );
  columnArray = [];
  return result;
};

const calculatePercentage = (table, row, column) => {
  let rows = row;
  for (let i = row; i > 0; i = i - 1) {
    rows = rows - 1;
    const percent = createPercent(rows, table, column);
    percentsArray.push({ id: uuidv4(), percent });
  }
  const res = percentsArray.reverse();
  percentsArray = [];
  return res;
};

export default calculatePercentage;
