import { v4 as uuidv4 } from 'uuid';
import { createSelector } from '@reduxjs/toolkit';

import calculateAverage from '../js/calculateAverage';
import calculationPercentages from '../js/calculationPercentages';
import calculationsNearestAmounts from '../js/calculationsNearestAmounts';
import { IState } from './storeInterface';
import {
  IAverageArray,
  IObject,
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

const getAverage = (state: IState): IAverageArray[] => {
  const row: number = getRow(state);
  const table: Array<IObject[]> = getTable(state);
  const column: number = getColumn(state);
  return calculateAverage(table, row, column);
};

const getRowAmount = createSelector(
  [getTable],
  (dataTable: Array<IObject[]>): IObject[] => {
    return dataTable.reduce((acc: IObject[], row: IObject[]): IObject[] => {
      const sum = row.reduce((acc: number, value: IObject): number => {
        return acc + value.number;
      }, 0);
      acc.push({ id: uuidv4(), number: sum });
      return acc;
    }, []);
  },
);

const getPercent = createSelector(
  [getTable, getRowAmount],
  (table: Array<IObject[]>, amount: IObject[]): Array<IObjectPercent[]> => {
    return calculationPercentages(table, amount);
  },
);

const getComingNumbers = createSelector(
  [getTable, inCellNumber, getCell],
  (
    table: Array<IObject[]>,
    number: number | null,
    cell: number,
  ): INearestAmount[] | undefined => {
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
