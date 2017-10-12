import {v4} from "uuid";

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: "1",
      completed: true
    }, {
      id: v4(),
      text: "2",
      completed: true
    }, {
      id: v4(),
      text: "3",
      completed: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); // eslint-disable-line no-undef

export const fetchTodos = filter => delay(500).then(() => {
  switch (filter) {
  case "all":
    return fakeDatabase.todos;
  case "completed":
    return fakeDatabase
      .todos
      .filter(todo => todo.completed);
  case "active":
    return fakeDatabase
      .todos
      .filter(todo => !todo.completed);
  default:
    throw new Error(`Unknown filter: ${filter}.`);
  }
});

export const addTodo = text => delay(500).then(() => {
  const todo = {
    id: v4(),
    text,
    completed: false
  };
  fakeDatabase
    .todos
    .push(todo);
  return todo;
});

export const toggleTodo = id => delay(500).then(() => {
  const todo = fakeDatabase
    .todos
    .find(t => t.id === id);
  todo.completed = !todo.completed;
  return todo;
});
