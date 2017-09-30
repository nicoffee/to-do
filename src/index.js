import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import todos from "./reducers/addTodo";
import visibilityFilter from "./reducers/visibilityFilter";
import getVisibleTodos from "./reducers/getVisibleTodos";
import { setFilter, addTodo, toggleTodo } from "./actions";
import Counter from "./components/Counter";
import "./index.css";

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

const setFilterAction = filter => {
  store.dispatch(setFilter(filter));
};

class TodoApp extends Component {
  render() {
    const visibleTodos = getVisibleTodos(
      this.props.todos,
      this.props.visibilityFilter
    );

    const handleKeyPress = e => {
      if (e.key === "Enter") {
        store.dispatch(addTodo(this.input.value));
        event.target.value = "";
      }
    };

    return (
      <div>
        <div className="form-group">
          <input
            ref={node => {
              this.input = node;
            }}
            onKeyPress={handleKeyPress}/>
          <button
            onClick={() => {
              store.dispatch(addTodo(this.input.value));
              this.input.value = "";
            }}>
            Add
          </button>
        </div>
        <ul>
          {visibleTodos.map((todo, id) => (
            <li
              key={id}
              className={`todo ${todo.completed ? "todo--completed" : ""}`}>
              <input
                id={todo.id}
                type="checkbox"
                onClick={() => store.dispatch(toggleTodo(todo.id))}
              />
              <span>{todo.text}</span>
            </li>
          ))}
        </ul>
        {store.getState().visibilityFilter === "SHOW_ALL" ? (
          <span
            onClick={() => {
              console.log(store.getState());
              return setFilterAction("SHOW_ALL");
            }}
          >
            All
          </span>
        ) : (
          <b
            onClick={() => {
              console.log(store.getState());
              return setFilterAction("SHOW_ALL");
            }}
          >
            All
          </b>
        )}{" "}
        <span onClick={() => setFilterAction("SHOW_COMPLETED")}>
          Completed
        </span>{" "}
        <span onClick={() => setFilterAction("SHOW_ACTIVE")}>Active</span>
      </div>
    );
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
