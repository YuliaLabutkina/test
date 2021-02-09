import { combineReducers } from 'redux';
import { IObject } from '../../interface/interface';
import {
  CREATE_TABLE,
  CHANGE_AMOUNT_CELL,
  DELATE_ROW,
  ADD_ROW,
  IS_CREATE,
  SHOW_NUMBER,
  HIDE_NUMBER,
  ADD_INDEX_SELECTED_ROW,
  DELATE_INDEX_SELECTED_ROW,
  ICreated,
  ActionTypesDataTableReducer,
  ActionTypesNumberReducer,
  ActionTypesIndexCellRowAmountReducer,
} from './types';

const changeAmountCells = (
  state: Array<IObject[]>,
  payload: string,
): Array<IObject[]> => {
  return [
    ...state.map((row: IObject[]) =>
      row.map((el: IObject) => {
        if (el.id === payload) {
          const newElNumber: number = el.number + 1;
          return { ...el, number: newElNumber };
        }
        return el;
      }),
    ),
  ];
};

const deleteRow = (
  state: Array<IObject[]>,
  payload: number,
): Array<IObject[]> => {
  return [
    ...state.filter((row: IObject[], index: number) =>
      index !== payload ? row : null,
    ),
  ];
};

const dataTable = (
  state: Array<IObject[]> = [],
  action: ActionTypesDataTableReducer,
) => {
  switch (action.type) {
    case CREATE_TABLE:
      return [...action.payload];
    case CHANGE_AMOUNT_CELL:
      return changeAmountCells(state, action.payload);
    case DELATE_ROW:
      return deleteRow(state, action.payload);
    case ADD_ROW:
      return [...state, action.payload[0]];
    default:
      return state;
  }
};

const isCreated = (state: boolean = false, action: ICreated) => {
  switch (action.type) {
    case IS_CREATE:
      return true;
    default:
      return state;
  }
};

const number = (
  state: null | number = null,
  action: ActionTypesNumberReducer,
) => {
  switch (action.type) {
    case SHOW_NUMBER:
      return action.payload;
    case HIDE_NUMBER:
      return false;
    default:
      return state;
  }
};

const indexCellRowAmount = (
  state: null | number = null,
  action: ActionTypesIndexCellRowAmountReducer,
) => {
  switch (action.type) {
    case ADD_INDEX_SELECTED_ROW:
      return action.payload;
    case DELATE_INDEX_SELECTED_ROW:
      return null;
    default:
      return state;
  }
};

const tableReducer = combineReducers({
  dataTable,
  isCreated,
  number,
  indexCellRowAmount,
});

export default tableReducer;

// import { createReducer } from '@reduxjs/toolkit';
// import tableActions from './table-action';

// const dataTable = createReducer([], {
//   [tableActions.createTable]: (_, { payload }) => [...payload],
//   [tableActions.changeAmountCells]: changeAmountCells,
//   [tableActions.deleteRow]: deleteRow,
//   [tableActions.addRow]: (state, { payload }) => [...state, payload[0]],
// });

// const isCreated = createReducer(false, {
//   [tableActions.isCreated]: () => true,
// });

// const number = createReducer(null, {
//   [tableActions.showNumber]: (_, { payload }) => payload,
//   [tableActions.hideNumber]: () => null,
// });

// const indexCellRowAmount = createReducer(null, {
//   [tableActions.addIndexSelectedRow]: (_, { payload }) => payload,
//   [tableActions.deleteIndexSelectedRow]: () => null,
// });
