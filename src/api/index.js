import { v4 } from "uuid";

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      text: "1",
      completed: true
    },
    {
      id: v4(),
      text: "2",
      completed: true
    },
    {
      id: v4(),
      text: "3",
      completed: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms)); // eslint-disable-line no-undef

export const fetchTodos = filter =>
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error('Boom!');
    }

    switch (filter) {
      case "all":
        return fakeDatabase.todos;
      case "completed":
        return fakeDatabase.todos.filter(todo => todo.completed);
      case "active":
        return fakeDatabase.todos.filter(todo => !todo.completed);
      default:
        throw new Error(`Unknown filter: ${filter}.`);
    }
  });
