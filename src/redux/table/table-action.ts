import { ICell } from '../../interface/interface';
import {
  CREATE_TABLE,
  CHANGE_AMOUNT_CELL,
  DELATE_ROW,
  ADD_ROW,
  IS_CREATE,
  SHOW_NUMBER,
  HIDE_NUMBER,
  ADD_INDEX_SELECTED_ROW,
  DELATE_INDEX_SELECTED_ROW,
  ICreated,
  ActionTypesDataTableReducer,
  ActionTypesNumberReducer,
  ActionTypesIndexCellRowAmountReducer,
} from './types';

const createTable = (table: Array<ICell[]>): ActionTypesDataTableReducer => ({
  type: CREATE_TABLE,
  payload: table,
});

const changeAmountCells = (id: string): ActionTypesDataTableReducer => ({
  type: CHANGE_AMOUNT_CELL,
  payload: id,
});

const deleteRow = (id: number): ActionTypesDataTableReducer => ({
  type: DELATE_ROW,
  payload: id,
});

const addRow = (row: Array<ICell[]>): ActionTypesDataTableReducer => ({
  type: ADD_ROW,
  payload: row,
});

const isCreated = (): ICreated => ({
  type: IS_CREATE,
});

const showNumber = (amount: number): ActionTypesNumberReducer => ({
  type: SHOW_NUMBER,
  payload: amount,
});

const hideNumber = (): ActionTypesNumberReducer => ({
  type: HIDE_NUMBER,
});

const addIndexSelectedRow = (
  index: number,
): ActionTypesIndexCellRowAmountReducer => ({
  type: ADD_INDEX_SELECTED_ROW,
  payload: index,
});

const deleteIndexSelectedRow = (): ActionTypesIndexCellRowAmountReducer => ({
  type: DELATE_INDEX_SELECTED_ROW,
});

export default {
  createTable,
  changeAmountCells,
  deleteRow,
  addRow,
  isCreated,
  showNumber,
  hideNumber,
  addIndexSelectedRow,
  deleteIndexSelectedRow,
};

// import { createAction } from '@reduxjs/toolkit';

// const createTable = createAction('table/Create');
// const isCreated = createAction('table/IsCreated');
// const changeAmountCells = createAction('table/ChangeAmountCells');
// const deleteRow = createAction('table/DeleteRow');
// const addRow = createAction('table/AddRow');
// const showNumber = createAction('table/ShowNumber');
// const hideNumber = createAction('table/HideNumber');
// const addIndexSelectedRow = createAction('table/AddIndexSelectedRow');
// const deleteIndexSelectedRow = createAction('table/DeleteIndexSelectedRow');
