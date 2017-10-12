const byId = (state = {}, action) => {
  switch (action.type) {
    /* eslint-disable */
    case "FETCH_TODOS_SUCCESS":
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    /* eslint-enable */
    case "ADD_TODO_SUCCESS":
      return {
        ...state,
        [action.response.id]: action.response
      };
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
