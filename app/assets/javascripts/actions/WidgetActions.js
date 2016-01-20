
export function addTodo(text) {
  // http://chamnapchhorn.blogspot.ca/2008/07/trick-to-use-static-variables-in.html
  addTodo.count = ++addTodo.count || 1; // addTodo.count is undefined at first

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

export function setInputValue(text) {
  return {
    type: 'SET_INPUT_VALUE',
    inputText: text,
  }
}

export function getDataFromApi() {
  return (dispatch, getState) => {
    // here starts the code that actually gets executed when the
    //  addTodo action creator is dispatched

    // first of all, let's do the optimistic UI update - we need to
    // dispatch the old synchronous action object, using the renamed
    // action creator
    // dispatch(addTodoOptimistic(text));

    // now that the Store has been notified of the new todo item, we
    // should also notify our server - we'll use here ES6 fetch
    // function to post the data

    $.get('/api/v1/messages')
      .done((data) => {
        // you should probably get a real id for your new todo item here,
        // and update your store, but we'll leave that to you

        // In this case, we dont want to change the store value, just the state
        dispatch({
          type: 'SET_INPUT_VALUE',
          inputText: data[0].body,
        });

      })
      .fail((err) => {
        console.log(err);
        // Error: handle it the way you like, undoing the optimistic update,
        // showing a "out of sync" message, etc.
      })
      .always(() => {
        // console.log('end of ajax request');
      })
      ;

    // what you return here gets returned by the dispatch function that
    // used this action creator
    return null;
  };
}
