import { createAction } from '@reduxjs/toolkit';

const createTable = createAction('table/Create');
const isCreated = createAction('table/IsCreated');
const changeAmountCells = createAction('table/ChangeAmountCells');
const deleteRow = createAction('table/DeleteRow');
const addRow = createAction('table/AddRow');

export default {
  createTable,
  isCreated,
  changeAmountCells,
  deleteRow,
  addRow,
};
