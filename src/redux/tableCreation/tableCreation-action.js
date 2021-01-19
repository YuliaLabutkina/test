import { createAction } from '@reduxjs/toolkit';

const createRow = createAction('table/CreateRow');
const createColumn = createAction('table/CreateColumn');
const createX = createAction('table/CreateX');

export default {
  createRow,
  createColumn,
  createX,
};
