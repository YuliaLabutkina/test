import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import tableReducer from './table/table-reducer';
import tableCreationReducer from './tableCreation/tableCreation-reducer';

const rootReducer = combineReducers({
  tableCreation: tableCreationReducer,
  table: tableReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;

export type AppDispatch = typeof store.dispatch;
