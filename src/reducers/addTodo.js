const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    text: action.text,
                    id: action.id,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                console.log(action);

                if (todo.id !== action.id) {
                    return todo;
                }

                console.log(todo);

                return {
                    ...todo,
                    completed: !todo.completed
                }
            });
        default:
            return state;
    }
};

export default todos;

