import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from "./../actions";


const AddTodo = ({ dispatch }) => (
  <div className="form-group">
    <input
      ref={node => {
        this.input = node;
      }}
      onKeyPress={e => {
        if (e.key === "Enter") {
          dispatch(addTodo(this.input.value));
          e.target.value = "";
        }
      }}
    />
    <button
      onClick={() => {
        dispatch(addTodo(this.input.value));
        this.input.value = "";
      }}
    >
      Add
    </button>
  </div>
);

export default connect()(AddTodo);