import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTodo} from './../actions';

const AddTodo = ({dispatch}) => (
  <div className="form-group">
    <input
      ref={node => {
        this.input = node;
      }}
      onKeyPress={e => {
        if (e.key === 'Enter' && this.input.value) {
          dispatch(addTodo(this.input.value));
          e.target.value = '';
        }
      }}/>
    <button
      onClick={() => {
        if (this.input.value) {
          dispatch(addTodo(this.input.value));
          this.input.value = '';
        }
      }}>
      Add
    </button>
  </div>
);

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);