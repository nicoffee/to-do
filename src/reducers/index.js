import { combineReducers } from "redux";
import byId, * as fromById from "./byId";
import createList, * as fromCreateList from './createList';

const idsByFilter = combineReducers({
  all: createList("all"),
  active: createList("active"),
  completed: createList("completed")
});

const todos = combineReducers({
  byId,
  idsByFilter
});

export default todos;

export const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};
