import { IObject } from '../interface/interface';

interface ITableCreation {
  m: number;
  n: number;
  x: number;
}

interface ITable {
  dataTable: Array<IObject[]>;
  indexCellRowAmount: number | null;
  isCreated: boolean;
  number: number | null;
}

export interface IState {
  tableCreation: ITableCreation;
  table: ITable;
}
