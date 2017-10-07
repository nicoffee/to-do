import React from "react";
import Todo from "./../components/Todo";
import PropTypes from "prop-types";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, idx) => (
      <Todo key={idx} onClick={() => onTodoClick(todo.id)} {...todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
};

export default TodoList;
