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

const isDeleteRow = (state, { payload }) => {
  return [...state.filter((row, index) => (index !== payload ? row : null))];
};

const table = createReducer([], {
  [tableActions.createTable]: (_, { payload }) => [...payload],
  [tableActions.changeAmountCells]: changeAmountCells,
  [tableActions.deleteRow]: isDeleteRow,
  [tableActions.addRow]: (state, { payload }) => [...state, payload[0]],
});

const isCreated = createReducer(false, {
  [tableActions.isCreated]: () => true,
});

const tableReducer = combineReducers({
  table,
  isCreated,
});

export default tableReducer;
