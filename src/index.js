import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import todos from "./reducers/addTodo";
import visibilityFilter from "./reducers/visibilityFilter";
import getVisibleTodos from "./reducers/getVisibleTodos";
import { setFilter, addTodo, toggleTodo } from "./actions";
import "./index.css";

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);

const setFilterAction = filter => {
  store.dispatch(setFilter(filter));
};

const FilterLink = ({ filter, currentFilter, children }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        setFilterAction(filter);
      }}
    >
      {children}
    </a>
  );
};

class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;

    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    const handleKeyPress = e => {
      if (e.key === "Enter") {
        store.dispatch(addTodo(this.input.value));
        e.target.value = "";
      }
    };

    return (
      <div>
        <div className="form-group">
          <input
            ref={node => {
              this.input = node;
            }}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={() => {
              store.dispatch(addTodo(this.input.value));
              this.input.value = "";
            }}
          >
            Add
          </button>
        </div>
        <ul>
          {visibleTodos.map((todo, id) => (
            <li
              key={id}
              className={`todo ${todo.completed ? "todo--completed" : ""}`}
            >
              <input
                id={todo.id}
                type="checkbox"
                checked={todo.completed}
                onChange={() => store.dispatch(toggleTodo(todo.id))}
              />
              <label>{todo.text}</label>
            </li>
          ))}
        </ul>
        <span>Filter:</span>{" "}
        <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>
          All
        </FilterLink>{" "}
        <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}>
          Completed
        </FilterLink>{" "}
        <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>
          Active
        </FilterLink>
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
