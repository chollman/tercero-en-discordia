import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";

const PageWrapper = ({ children }) => {
    return (
        <div className="bgm-page-wrapper">
            <Navbar />
            {children}
        </div>
    );
};

PageWrapper.prototype = {
    children: PropTypes.func.isRequired,
};

export default PageWrapper;
