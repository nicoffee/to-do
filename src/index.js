import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import todos from './reducers/addTodo'
import visibilityFilter from './reducers/visibilityFilter'
import getVisibleTodos from './reducers/getVisibleTodos'
import './index.css'

const todoApp = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
});

const setFilterAction = (filter) => {
    store.dispatch(
      {
          type: 'SET_VISIBILITY_FILTER',
          filter: filter
      }
    )
};

const store = createStore(todoApp);

let nextToDoId = 0;

class TodoApp extends React.Component {
    render() {
        const visibleTodos = getVisibleTodos(this.props.todos, this.props.visibilityFilter);

        return (
          <div>
              <input ref={(node) => {
                  this.input = node;
              }}/>
              <button onClick={() => {
                  store.dispatch(
                    {
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextToDoId++
                    }
                  );
                  this.input.value = '';
              }}
              >
                  Add todo
              </button>
              <ul>
                  {visibleTodos.map((todo, id) =>
                    <li
                      key={id}
                      onClick={() => store.dispatch(
                        {
                            type: 'TOGGLE_TODO',
                            id: todo.id
                        }
                      )}
                      style={{textDecoration: (todo.completed) ? 'line-through' : '' }}
                    >
                        {todo.text}
                    </li>)
                  }
              </ul>
              <span onClick={setFilterAction('SHOW_ALL')}>
                  All
              </span>
              {' '}
              <span onClick={setFilterAction('SHOW_COMPLETED')}>
                  Completed
              </span >
              {' '}
              <span onClick={setFilterAction('SHOW_ACTIVE')}>
                  Active
              </span>
          </div>
        )
    }
}

const render = () => {
    ReactDOM.render(
      <TodoApp {...store.getState()} />, document.getElementById('root')
    );
};

store.subscribe(render);
render();