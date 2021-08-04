import React from "react";
import PropTypes from "prop-types";

const Plan = ({ classes = "", title, children }) => {
    return (
        <div className={`plan ${classes}`}>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

Plan.propTypes = {
    classes: PropTypes.string,
    title: PropTypes.string.isRequired,
};

export default Plan;
