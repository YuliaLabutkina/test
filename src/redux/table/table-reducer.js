import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import tableActions from './table-action';

const changeAmountCells = (state, { payload }) => {
  return [
    ...state.map(row =>
      row.map(el => {
        if (el.id === payload) {
          const newElNumber = el.number + 1;
          return { ...el, number: newElNumber };
        }
        return el;
      }),
    ),
  ];
};

const deleteRow = (state, { payload }) => {
  return [...state.filter((row, index) => (index !== payload ? row : null))];
};

const dataTable = createReducer([], {
  [tableActions.createTable]: (_, { payload }) => [...payload],
  [tableActions.changeAmountCells]: changeAmountCells,
  [tableActions.deleteRow]: deleteRow,
  [tableActions.addRow]: (state, { payload }) => [...state, payload[0]],
});

const isCreated = createReducer(false, {
  [tableActions.isCreated]: () => true,
});

const number = createReducer(null, {
  [tableActions.showNumber]: (_, { payload }) => payload,
  [tableActions.hideNumber]: () => null,
});

const indexCellRowAmount = createReducer(null, {
  [tableActions.addIndexSelectedRow]: (_, { payload }) => payload,
  [tableActions.deleteIndexSelectedRow]: () => null,
});

const tableReducer = combineReducers({
  dataTable,
  isCreated,
  number,
  indexCellRowAmount,
});

export default tableReducer;
