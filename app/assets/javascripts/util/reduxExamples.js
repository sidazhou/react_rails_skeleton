// See console logs

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

const store = createStore(counter, 2); // createStore(reducer, initialState)

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });


// //////////////////////////////////////////////////////////////////////////

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

// const todoApp = (state = {}, action) => { // this is so a dispatcher
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//   };
// };

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

const todoAppStore = createStore(todoApp); // createStore(reducer, initialState)

todoAppStore.subscribe(() => {
  console.log(todoAppStore.getState());
});

console.log('dispatching ADD_TODO');
todoAppStore.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'sdMYTEXT',
});

console.log('dispatching ADD_TODO');
todoAppStore.dispatch({
  type: 'ADD_TODO',
  id: 1,
  text: 'HALLOOOO',
});

console.log('dispatching SET_VISIBILITY_FILTER');
todoAppStore.dispatch({
  type: 'SET_VISIBILITY_FILTER',
  filter: 'sdtemp_DONT_SHOW_EM_ANYTHING',
});

console.log('dispatching TOGGLE_TODO');
todoAppStore.dispatch({
  type: 'TOGGLE_TODO',
  id: 1,
});

export default {};
