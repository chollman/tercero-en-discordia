import React from "react";
import PropTypes from "prop-types";

const ServiceCard = ({ imageSrc, title, children }) => {
    return (
        <div className="service-card">
            <i>
                <img width="52" height="52" src={imageSrc} alt={title} />
            </i>
            <h4>{title}</h4>
            {children}
        </div>
    );
};

ServiceCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default ServiceCard;
