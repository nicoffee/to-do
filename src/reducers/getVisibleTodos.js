const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'completed':
            return todos.filter(todo => todo.completed);
        case 'active':
            return todos.filter(todo => !todo.completed);
        case 'all':
            return todos;
        default:
            return todos;
    }
};

export default getVisibleTodos;