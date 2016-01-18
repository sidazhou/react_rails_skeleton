import { createStore, combineReducers } from 'redux';

const counter = (state = 0, action) => {  // reducer
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
};

const myStoreText = (state = 'my default store text', action) => {
  if (action.type === 'CHANGE_WIDGET5_TEXT') {
    return 'Y U CLICK THIS TEXT';
  }
  return state;
};


const WidgetsApp = combineReducers({
  counter,
  myStoreText,
});

const WidgetStores = createStore(WidgetsApp); // createStore(reducer, initialState)

WidgetStores.subscribe(() => {
  console.log(WidgetStores.getState());
});

export default WidgetStores;
