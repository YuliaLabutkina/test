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

const createPercentages = (state, { payload: { newRow, index } }) => {
  return state.map((row, id) => {
    if (id === index) {
      return row.map((el, id) => ({ ...el, ...newRow[id] }));
    }
    return row;
  });
};

const table = createReducer([], {
  [tableActions.createTable]: (_, { payload }) => [...payload],
  [tableActions.changeAmountCells]: changeAmountCells,
  [tableActions.deleteRow]: deleteRow,
  [tableActions.addRow]: (state, { payload }) => [...state, payload[0]],
  [tableActions.createPercentages]: createPercentages,
});

const isCreated = createReducer(false, {
  [tableActions.isCreated]: () => true,
});

const isComingNumbers = createReducer([], {
  [tableActions.showComingNumbers]: (_, { payload }) => [...payload],
  [tableActions.hideComingNumbers]: () => [],
});

const tableReducer = combineReducers({
  table,
  isCreated,
  isComingNumbers,
});

export default tableReducer;
