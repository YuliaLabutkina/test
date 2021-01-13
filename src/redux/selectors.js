import { v4 as uuidv4 } from 'uuid';
import { createSelector } from '@reduxjs/toolkit';

import calculatePercentage from '../js/calculatePercentage';

const isCreated = state => state.table.isCreated;
const getTable = state => state.table.table;
const getRow = state => state.tableCreation.m;
const getColumn = state => state.tableCreation.n;

const getRowAmount = createSelector([getTable], table => {
  const sumArray = [];
  table.map(row => {
    const sum = row.reduce((acc, value) => acc + value.number, 0);
    sumArray.push({ id: uuidv4(), sum });
  });
  return sumArray;
});

const getPercent = state => {
  const row = state.tableCreation.m;
  const table = state.table.table;
  const column = state.tableCreation.n;
  return calculatePercentage(table, row, column);
};

export { isCreated, getTable, getRowAmount, getPercent, getRow, getColumn };
