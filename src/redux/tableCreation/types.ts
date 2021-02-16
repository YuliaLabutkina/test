export const CREATE_ROW = 'table/CreateRow';
export const CREATE_COLUMN = 'table/CreateColumn';
export const CREATE_X = 'table/CreateX';

interface ICreateRow {
  type: typeof CREATE_ROW;
  payload: number;
}

interface ICreateColumn {
  type: typeof CREATE_COLUMN;
  payload: number;
}

interface ICreateX {
  type: typeof CREATE_X;
  payload: number;
}

export type TableCreateActionTypes = ICreateRow | ICreateColumn | ICreateX;
