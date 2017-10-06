import todos from "./addTodo";
import { combineReducers } from "redux";

const todoApp = combineReducers({
  todos
});

export default todoApp;