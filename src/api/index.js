import { v4 } from "uuid";

const fakeDatabase = {
  todos: [
    {
      id: v4(),
      test: "test",
      completed: true
    },
    {
      id: v4(),
      test: "test2",
      completed: true
    },
    {
      id: v4(),
      test: "test3",
      completed: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
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
