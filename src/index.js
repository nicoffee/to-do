import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import addTodo from './reducers/addTodo'
import './index.css'

const store = createStore(addTodo);

class TodoApp extends React.Component {
    render() {
        return (
          <div>
              <input ref={(node) => {
                  this.input = node;
              }} />
              <button onClick={() => {
                  store.dispatch(
                    {
                        type: 'ADD_TODO',
                        text: this.input.value
                    }
                  )
              }}
              >
                  Add todo
              </button>
              <ul>
                  { console.log('store.getState()', store.getState())} {store.getState().map((todo, id) =>
                    <li key={id}>
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
      <TodoApp />, document.getElementById('root')
    );
};

store.subscribe(render);
render();