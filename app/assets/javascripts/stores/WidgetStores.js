import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

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


const todo = (state, action) => { // reducer
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, { completed: !state.completed });
    default:
      return state;
  }
};

const todos = (state = [], action) => { // reducer
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};


const visibilityFilter = (state = 'SHOW_ALL', action) => { // reducer
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const inputValue = (state = 'default text not from api', action) => { // reducer
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return action.inputText;
    default:
      return state;
  }
};

const WidgetsApp = combineReducers({
  counter,
  myStoreText,
  todos,
  visibilityFilter,
  inputValue,
});

const WidgetStores = applyMiddleware(thunk)(createStore)(WidgetsApp);

WidgetStores.subscribe(() => {
  console.log(WidgetStores.getState());
});

export default WidgetStores;
