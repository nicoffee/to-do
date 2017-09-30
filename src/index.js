import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import todos from './reducers/addTodo'
import visibilityFilter from './reducers/visibilityFilter'
import getVisibleTodos from './reducers/getVisibleTodos'
import {setFilter, addTodo, toggleTodo} from './actions'
import Counter from './components/Counter'
import './index.css'

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp);

const setFilterAction = (filter) => {
    store.dispatch(setFilter(filter))
};

class TodoApp extends React.Component {
    render() {
        const visibleTodos = getVisibleTodos(this.props.todos, this.props.visibilityFilter);

        return (
            <div>
              <div>
                <input ref={(node) => {
                    this.input = node;
                }}/>
                <button onClick={() => {
                    store.dispatch(addTodo(this.input.value));
                    this.input.value = '';
                }}>
                    Add
                </button>
              </div>
              
              <ul>
                  {visibleTodos.map((todo, id) =>
                    <li
                      key={id}
                      onClick={() => store.dispatch(toggleTodo(todo.id))}
                      style={{textDecoration: (todo.completed) ? 'line-through' : '' }}
                    >
                        {todo.text}
                    </li>)
                  }
              </ul>
              <span onClick={() => setFilterAction('SHOW_ALL')}>
                  All
              </span>
              {' '}
              <span onClick={() => setFilterAction('SHOW_COMPLETED')}>
                  Completed
              </span >
              {' '}
              <span onClick={() => setFilterAction('SHOW_ACTIVE')}>
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