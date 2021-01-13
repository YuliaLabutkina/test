import { createAction } from '@reduxjs/toolkit';

const createRow = createAction('table/CreateRow');
const createColumn = createAction('table/CreateColumn');

export default {
  createRow,
  createColumn,
};
