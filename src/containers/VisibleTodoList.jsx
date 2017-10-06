import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getVisibleTodos } from './../reducers'
import { toggleTodo } from './../actions'
import TodoList from './../components/TodoList';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all')
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps, 
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;