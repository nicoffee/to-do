import React from "react";
import { render } from "react-dom";
import Root from "./components/Root"
import configureStore from "./configureStore";
import { fetchTodos } from './api';
import "./index.css";

fetchTodos('all').then(todos => 
    console.log('todos', todos)
);

const store = configureStore();
render( 
    <Root store = { store }/>, 
    document.getElementById("root")
);