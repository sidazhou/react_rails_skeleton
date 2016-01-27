import { combineReducers } from 'redux';
const namespace = 'WidgetsTry2/';

const INCREMENT = namespace + 'INCREMENT';
const DECREMENT = namespace + 'DECREMENT';

const counter = (state = 0, action) => {  // reducer
  if (action.type === INCREMENT) {
    return state + 1;
  } else if (action.type === DECREMENT) {
    return state - 1;
  } else {
    return state;
  }
};


const widgetsTry2 = combineReducers({
  counter,
});

export default widgetsTry2;
