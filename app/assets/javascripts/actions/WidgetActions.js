
export function addTodo(text) {
  // http://chamnapchhorn.blogspot.ca/2008/07/trick-to-use-static-variables-in.html
  addTodo.count = ++addTodo.count || 1 // f.count is undefined at first

  return {
    type: 'ADD_TODO',
    text: text,
    id: addTodo.count,
  };
}

export function toggleTodo(todo) {
  return {
    type: 'TOGGLE_TODO',
    id: todo.id,
  };
}
