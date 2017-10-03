import React, { Component } from "react";
import { connect } from 'react-redux';
import Link from './../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: ownProps
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);