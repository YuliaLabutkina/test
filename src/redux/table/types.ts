import { IObject } from '../../interface/interface';

export const CREATE_TABLE = 'table/Create';
export const IS_CREATE = 'table/IsCreated';
export const CHANGE_AMOUNT_CELL = 'table/ChangeAmountCells';
export const DELATE_ROW = 'table/DeleteRow';
export const ADD_ROW = 'table/AddRow';
export const SHOW_NUMBER = 'table/ShowNumber';
export const HIDE_NUMBER = 'table/HideNumber';
export const ADD_INDEX_SELECTED_ROW = 'table/AddIndexSelectedRow';
export const DELATE_INDEX_SELECTED_ROW = 'table/DeleteIndexSelectedRow';

interface ICreateTable {
  type: typeof CREATE_TABLE;
  payload: Array<IObject[]>;
}

interface IChangeAmountCells {
  type: typeof CHANGE_AMOUNT_CELL;
  payload: string;
}

interface IDeleteRow {
  type: typeof DELATE_ROW;
  payload: number;
}

interface IAddRow {
  type: typeof ADD_ROW;
  payload: Array<IObject[]>;
}

export interface ICreated {
  type: typeof IS_CREATE;
}

interface IShowNumber {
  type: typeof SHOW_NUMBER;
  payload: number;
}

interface IHideNumber {
  type: typeof HIDE_NUMBER;
}

interface IAddIndexSelectedRow {
  type: typeof ADD_INDEX_SELECTED_ROW;
  payload: number;
}

interface IDeleteIndexSelectedRow {
  type: typeof DELATE_INDEX_SELECTED_ROW;
}

export type ActionTypesDataTableReducer =
  | ICreateTable
  | IChangeAmountCells
  | IDeleteRow
  | IAddRow;
export type ActionTypesNumberReducer = IShowNumber | IHideNumber;
export type ActionTypesIndexCellRowAmountReducer =
  | IAddIndexSelectedRow
  | IDeleteIndexSelectedRow;
