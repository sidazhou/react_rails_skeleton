import { combineReducers } from 'redux';

const counter = (state = 0, action) => {  // reducer
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
};


const WidgetsTry2reducers = combineReducers({
  counter,
});

export default WidgetsTry2reducers;
