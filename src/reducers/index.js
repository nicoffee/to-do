import todos from "./addTodo";
import visibilityFilter from "./visibilityFilter";
import { createStore, combineReducers } from "redux";

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;