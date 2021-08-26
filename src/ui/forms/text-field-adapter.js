import React from "react";
import FormBootstrap from "react-bootstrap/Form";

const TextFieldAdapter = ({ input, meta, ...rest }) => (
    <span className="my-form-group">
        <FormBootstrap.Control {...input} {...rest} />
        {meta.error && meta.touched && <div className="error-input">{meta.error}</div>}
    </span>
);

export default TextFieldAdapter;
