import React from "react";
import FilterLink from "./../containers/FilterLink";
import PropTypes from "prop-types";

const Footer = ({store}) => (
  <div>
    <span>Filter:</span>
    <FilterLink filter="all" store={store}>
      All
    </FilterLink>,
    <FilterLink filter="completed" store={store}>
      Completed
    </FilterLink>,
    <FilterLink filter="active" store={store}>
      Active
    </FilterLink>
  </div>
);

Footer.propTypes = {
  store: PropTypes.object
};

export default Footer;
