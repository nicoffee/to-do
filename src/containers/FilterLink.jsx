import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FilterLink = ({ filter, children }) => (
    <Link to={filter === 'all' ? '' : filter}>
        {children}
    </Link>
)

FilterLink.propTypes = {
    filter: PropTypes.string,
    children: PropTypes.string
}

export default FilterLink;