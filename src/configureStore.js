import { createStore } from "redux";
import todoApp from "./reducers";

const addLoggingToDispatch = store => {
  /* eslint-disable no-console */
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }

  return action => {
    console.group(action.type);
    console.log("%c prev state", "color: gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
  /* eslint-enable no-console */
};

const addPromiseSupportToDispatch = store => {
  const rawDispatch = store.dispatch;
  
  console.log('rawDispatch', rawDispatch);

  return action => {
    if (typeof action.then === "function") {
      return action.then(rawDispatch);
    }
    return rawDispatch(action);
  };
};

const configureStore = () => {
  const store = createStore(todoApp);

  if (process.env.NODE_ENV !== "production") { // eslint-disable-line no-undef
    store.dispatch = addLoggingToDispatch(store);
  }

  console.log('store.dispatch BEFORE:', store.dispatch);

  store.dispatch = addPromiseSupportToDispatch(store);

  console.log('store.dispatch AFTER:', store.dispatch);

  return store;
};

export default configureStore;
