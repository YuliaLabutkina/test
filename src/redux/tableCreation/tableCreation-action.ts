import {
  CREATE_ROW,
  CREATE_COLUMN,
  CREATE_X,
  TableCreateActionTypes,
} from './types';

const createRow = (row: number): TableCreateActionTypes => ({
  type: CREATE_ROW,
  payload: row,
});

const createColumn = (column: number): TableCreateActionTypes => ({
  type: CREATE_COLUMN,
  payload: column,
});

const createX = (x: number): TableCreateActionTypes => ({
  type: CREATE_X,
  payload: x,
});

export default {
  createRow,
  createColumn,
  createX,
};

// import { createAction } from '@reduxjs/toolkit';

// const createRow = createAction('table/CreateRow');
// const createColumn = createAction('table/CreateColumn');
// const createX = createAction('table/CreateX');
