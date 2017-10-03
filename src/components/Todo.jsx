import React from "react";

const Todo = ({ completed, id, text, onClick }) => (
  <li className={`todo ${completed ? "todo--completed" : ""}`}>
    <input type="checkbox" checked={completed} onChange={onClick}/>
    <label>{text}</label>
  </li>
);

export default Todo;