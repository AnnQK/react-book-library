import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { filterReducer } from './reducers/filterReducer';
import { bookReducer } from './reducers/bookReducer';
import { uiReducer } from './reducers/uiReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  books: bookReducer,
  ui: uiReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
