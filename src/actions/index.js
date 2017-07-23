let nextToDoId = 0;

export const setFilter = filter => (
      {
          type: 'SET_VISIBILITY_FILTER',
          filter
      }
);

export const addTodo = text => (
      {
            type: 'ADD_TODO',
            text,
            id: nextToDoId++
      }
);

export const toggleTodo = id => (
      {
            type: 'TOGGLE_TODO',
            id: todo.id
      }
);


