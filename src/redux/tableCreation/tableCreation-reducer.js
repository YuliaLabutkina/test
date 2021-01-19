import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import tableCreationActions from './tableCreation-action';
import tableActions from '../table/table-action';

const m = createReducer(null, {
  [tableCreationActions.createRow]: (_, { payload }) => payload,
  [tableActions.deleteRow]: state => state - 1,
  [tableActions.addRow]: state => state + 1,
});

const n = createReducer(null, {
  [tableCreationActions.createColumn]: (_, { payload }) => payload,
});

const x = createReducer(null, {
  [tableCreationActions.createX]: (_, { payload }) => payload,
});

const tableCreationReducer = combineReducers({
  m,
  n,
  x,
});

export default tableCreationReducer;
