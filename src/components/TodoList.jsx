import React from "react";
import Todo from "./../components/Todo";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, idx) => (
      <Todo key={idx} 
            onClick={() => onTodoClick(todo.id)} {...todo} />
    ))}
  </ul>
);

export default TodoList;