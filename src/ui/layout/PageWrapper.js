import React from "react";
import PropTypes from "prop-types";

const PageWrapper = ({ children }) => {
    return <div className="bgm-page-wrapper">{children}</div>;
};

PageWrapper.prototype = {
    children: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    color: PropTypes.string,
};

export default PageWrapper;
