import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import todos from "./reducers/addTodo";
import visibilityFilter from "./reducers/visibilityFilter";
import configureStore from './configureStore';
import "./index.css";


import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';



const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const TodoApp = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
);

ReactDOM.render(
  <Provider store={configureStore()} attriburtre='123' >
    <TodoApp/>
  </Provider>,
  document.getElementById("root")
);