import { v4 as uuidv4 } from 'uuid';
import { createSelector } from '@reduxjs/toolkit';

import calculateAverage from '../js/calculateAverage';
import calculationPercentages from '../js/calculationPercentages';
import calculationsNearestAmounts from '../js/calculationsNearestAmounts';

const isCreated = state => state.table.isCreated;
const getTable = state => state.table.dataTable;
const indexCellRowAmount = state => state.table.indexCellRowAmount;
const inCellNumber = state => state.table.number;
const getRow = state => state.tableCreation.m;
const getColumn = state => state.tableCreation.n;
const getCell = state => state.tableCreation.x;

const getAverage = state => {
  const row = getRow(state);
  const table = getTable(state);
  const column = getColumn(state);
  return calculateAverage(table, row, column);
};

const getRowAmount = createSelector([getTable], dataTable => {
  return dataTable.reduce((acc, row) => {
    const sum = row.reduce((acc, value) => acc + value.number, 0);
    acc.push({ id: uuidv4(), sum });
    return acc;
  }, []);
});

const getPercent = createSelector([getTable, getRowAmount], (table, amount) => {
  return calculationPercentages(table, amount);
});

const getComingNumbers = createSelector(
  [getTable, inCellNumber, getCell],
  (table, number, cell) => {
    return calculationsNearestAmounts(table, number, cell);
  },
);

export {
  isCreated,
  getTable,
  indexCellRowAmount,
  getAverage,
  inCellNumber,
  getRow,
  getColumn,
  getCell,
  getRowAmount,
  getPercent,
  getComingNumbers,
};
