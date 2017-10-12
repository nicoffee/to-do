import React from "react";
import PropTypes from 'prop-types';

const Todo = ({completed, id, text, onClick}) => (
  <li className={`todo ${completed
    ? "todo--completed"
    : ""}`}>
    <input type="checkbox" checked={completed} onChange={onClick}/>
    <label>{text}</label>
  </li>
);

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo;