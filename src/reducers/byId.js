const byId = (state = {}, action) => {
  switch (action.type) {
    /* eslint-disable */
    case "RECEIVE_TODOS":
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
