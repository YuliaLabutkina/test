import { v4 as uuidv4 } from 'uuid';
import { createSelector } from '@reduxjs/toolkit';

import calculateAverage from '../js/calculateAverage';
import calculationPercentages from '../js/calculationPercentages';
import calculationsNearestAmounts from '../js/calculationsNearestAmounts';
import { IState } from './storeInterface';
import {
  IAverageArray,
  ICell,
  IObjectPercent,
  INearestAmount,
} from '../interface/interface';

const isCreated = (state: IState) => state.table.isCreated;
const getTable = (state: IState) => state.table.dataTable;
const indexCellRowAmount = (state: IState) => state.table.indexCellRowAmount;
const inCellNumber = (state: IState) => state.table.number;
const getRow = (state: IState) => state.tableCreation.m;
const getColumn = (state: IState) => state.tableCreation.n;
const getCell = (state: IState) => state.tableCreation.x;

const getAverage = createSelector(
  [getTable, getColumn],
  (table, column): IAverageArray[] => {
    return calculateAverage(table, column);
  },
);

const getRowAmount = createSelector([getTable], (dataTable): ICell[] => {
  return dataTable.reduce((acc, row) => {
    const sum = row.reduce((acc, value) => {
      return acc + value.number;
    }, 0);
    acc.push({ id: uuidv4(), number: sum });
    return acc;
  }, []);
});

const getPercent = createSelector(
  [getTable, getRowAmount],
  (table, amount): Array<IObjectPercent[]> => {
    return calculationPercentages(table, amount);
  },
);

const getComingNumbers = createSelector(
  [getTable, inCellNumber, getCell],
  (table, number, cell): INearestAmount[] | undefined => {
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
