import { combineReducers } from 'redux';
import {
  TableCreateActionTypes,
  CREATE_ROW,
  CREATE_COLUMN,
  CREATE_X,
} from './types';
import {
  ActionTypesDataTableReducer,
  ADD_ROW,
  DELATE_ROW,
} from '../table/types';

const m = (
  state: number = 0,
  action: TableCreateActionTypes | ActionTypesDataTableReducer,
) => {
  switch (action.type) {
    case CREATE_ROW:
      return action.payload;
    case ADD_ROW:
      return state + 1;
    case DELATE_ROW:
      return state - 1;
    default:
      return state;
  }
};

const n = (state: number = 0, action: TableCreateActionTypes) => {
  switch (action.type) {
    case CREATE_COLUMN:
      return action.payload;
    default:
      return state;
  }
};

const x = (state: number = 0, action: TableCreateActionTypes) => {
  switch (action.type) {
    case CREATE_X:
      return action.payload;
    default:
      return state;
  }
};

const tableCreationReducer = combineReducers({
  m,
  n,
  x,
});

export default tableCreationReducer;
