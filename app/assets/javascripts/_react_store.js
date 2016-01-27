import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import widgets from './reducers/widgets.js';
import widgetsTry2 from './reducers/widgetsTry2.js';

const RootReducer = combineReducers({
  widgets,
  widgetsTry2,
});

const store = applyMiddleware(thunk)(createStore)(RootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
