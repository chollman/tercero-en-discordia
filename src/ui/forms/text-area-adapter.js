import FormBootstrap from "react-bootstrap/Form";
import React from "react";

const TextAreaAdapter = ({ input, meta, ...rest }) => (
    <span className="my-form-group">
        <FormBootstrap.Control as="textarea" {...input} {...rest} />
        {meta.error && meta.touched && <div className="error-input">{meta.error}</div>}
    </span>
);

export default TextAreaAdapter;
