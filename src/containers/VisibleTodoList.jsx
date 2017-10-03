import { connect } from 'react-redux';
import TodoList from './../components/TodoList';
import getVisibleTodos from './../reducers/getVisibleTodos'
import { toggleTodo } from './../actions'

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id))
});

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;