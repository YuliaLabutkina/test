import { createAction } from '@reduxjs/toolkit';

const createTable = createAction('table/Create');
const isCreated = createAction('table/IsCreated');
const changeAmountCells = createAction('table/ChangeAmountCells');
const deleteRow = createAction('table/DeleteRow');
const addRow = createAction('table/AddRow');
const addIndexSelectedRow = createAction('table/AddIndexSelectedRow');
const deleteIndexSelectedRow = createAction('table/DeleteIndexSelectedRow');
const showNumber = createAction('table/ShowNumber');
const hideNumber = createAction('table/HideNumber');

export default {
  createTable,
  isCreated,
  changeAmountCells,
  deleteRow,
  addRow,
  addIndexSelectedRow,
  deleteIndexSelectedRow,
  showNumber,
  hideNumber,
};
