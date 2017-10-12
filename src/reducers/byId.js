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
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
