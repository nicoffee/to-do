import React from "react";
import PropTypes from "prop-types";
import Todo from "./../components/Todo";

const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map((todo, idx) => (<Todo key={idx} onClick={() => onTodoClick(todo.id)} {...todo}/>))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
