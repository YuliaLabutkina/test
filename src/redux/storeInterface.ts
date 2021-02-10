import { ICell } from '../interface/interface';

interface ITableCreation {
  m: number;
  n: number;
  x: number;
}

interface ITable {
  dataTable: Array<ICell[]>;
  indexCellRowAmount: number | null;
  isCreated: boolean;
  number: number | null;
}

export interface IState {
  tableCreation: ITableCreation;
  table: ITable;
}
