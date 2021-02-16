import { v4 as uuidv4 } from 'uuid';
import { ICell } from '../interface/interface';

const createRandomNumber = (): number => {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
};

const createColumn = (column: number): ICell[] => {
  return Array.from({ length: column }, () => {
    return { id: uuidv4(), number: Number(createRandomNumber()) };
  });
};

const createTable = (row: number, column: number): Array<ICell[]> => {
  return Array.from({ length: row }, () => {
    return createColumn(column);
  });
};

export default createTable;
