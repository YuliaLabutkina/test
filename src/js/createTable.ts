import { v4 as uuidv4 } from 'uuid';
import { ICell } from '../interface/interface';

const createRandomNumber = (): number => {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
};

const createColumn = (column: number): ICell[] => {
  const columnArray: ICell[] = [];
  for (let i = column; i > 0; i -= 1) {
    columnArray.push({ id: uuidv4(), number: Number(createRandomNumber()) });
  }
  return columnArray;
};

const createTable = (row: number, column: number): Array<ICell[]> => {
  const tableArray: Array<ICell[]> = [];
  for (let i = row; i > 0; i -= 1) {
    tableArray.push(createColumn(column));
  }
  return tableArray;
};

export default createTable;
