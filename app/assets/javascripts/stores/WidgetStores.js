import { createStore } from 'redux';

const counter = (state = 0, action) => {  // reducer
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else {
    return state;
  }
};

const WidgetStores = createStore(counter, 2); // createStore(reducer, initialState)

WidgetStores.subscribe(() => {
  console.log(WidgetStores.getState());
});

export default WidgetStores;
