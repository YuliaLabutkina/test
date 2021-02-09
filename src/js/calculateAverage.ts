import { v4 as uuidv4 } from 'uuid';
import { IObject, IAverageArray } from '../interface/interface';

let averageArray: IAverageArray[] = [];
let rowArray: number[] = [];

const createAverage = (
  index: number,
  table: Array<IObject[]>,
  row: number,
): number => {
  for (let i = row; i > 0; i = i - 1) {
    const rows: IObject[] = table[i - 1];
    rowArray.push(rows[index].number);
  }
  const result: number = Math.round(
    rowArray.reduce((acc, value) => acc + value, 0) / row,
  );
  rowArray = [];
  return result;
};

const calculateAverage = (
  table: Array<IObject[]>,
  row: number,
  column: number,
): IAverageArray[] => {
  let columns: number = column;
  for (let i = column; i > 0; i = i - 1) {
    columns = columns - 1;
    const average: number = createAverage(columns, table, row);
    averageArray.push({ id: uuidv4(), average });
  }
  const res: IAverageArray[] = averageArray.reverse();
  averageArray = [];
  return res;
};

export default calculateAverage;
