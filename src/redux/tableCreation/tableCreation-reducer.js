import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import tableCreationActions from './tableCreation-action';
import tableActions from '../table/table-action';

const m = createReducer(0, {
  [tableCreationActions.createRow]: (_, { payload }) => payload,
});

const n = createReducer(0, {
  [tableCreationActions.createColumn]: (_, { payload }) => payload,
  [tableActions.deleteRow]: state => state - 1,
  [tableActions.addRow]: state => state + 1,
});

const tableCreationReducer = combineReducers({
  m,
  n,
});

export default tableCreationReducer;
