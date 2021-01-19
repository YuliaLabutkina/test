import { v4 as uuidv4 } from 'uuid';
import { createSelector } from '@reduxjs/toolkit';

import calculatePercentage from '../js/calculatePercentage';

const isCreated = state => state.table.isCreated;
const getTable = state => state.table.table;
const getComingNumbers = state => state.table.isComingNumbers;
const getRow = state => state.tableCreation.m;
const getColumn = state => state.tableCreation.n;
const getCell = state => state.tableCreation.x;

const getRowAmount = createSelector([getTable], table => {
  return table.reduce((acc, row) => {
    const sum = row.reduce((acc, value) => acc + value.number, 0);
    acc.push({ id: uuidv4(), sum });
    return acc;
  }, []);
});

const getPercent = state => {
  const row = getRow(state);
  const table = getTable(state);
  const column = getColumn(state);
  return calculatePercentage(table, row, column);
};

export {
  isCreated,
  getTable,
  getComingNumbers,
  getRowAmount,
  getPercent,
  getRow,
  getColumn,
  getCell,
};
