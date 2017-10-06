import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './../components/TodoList';
import getVisibleTodos from './../reducers/getVisibleTodos'
import { toggleTodo } from './../actions'

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state.todos, match.params.filter || 'all')
});

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(toggleTodo(id))
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;