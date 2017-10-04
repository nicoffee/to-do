import React from "react";

const Link = ({ active, onClick, children }) => {
    if (active) {
        return (
            <span>
                {children}
            </span>
        );
    }

    return (
        <button
            onClick={onClick}>
            {children}
        </button>
    )
};

export default Link;