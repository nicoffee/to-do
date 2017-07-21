import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import todos from './reducers/addTodo'
import './index.css'

const todoApp = combineReducers({
    todos: todos,
});

const store = createStore(todoApp);

let nextToDoId = 0;

class TodoApp extends React.Component {
    render() {
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
              {/*<button onClick={() => {*/}
                  {/*store.map((store) => dispatch(*/}
                    {/*{*/}
                        {/*type: 'TOGGLE_TODO',*/}
                        {/*id: store.id*/}
                    {/*}*/}
                  {/*))*/}
              {/*}}*/}
              {/*>*/}
                  {/*Toggle todo*/}
              {/*</button>*/}
              <ul>
                  {this.props.todos.map((todo, id) =>
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
          </div>
        )
    }
}

const render = () => {
    ReactDOM.render(
      <TodoApp todos={store.getState().todos}/>, document.getElementById('root')
    );
};

store.subscribe(render);
render();