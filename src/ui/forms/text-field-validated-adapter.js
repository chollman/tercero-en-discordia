import FormBootstrap from "react-bootstrap/Form";
import React from "react";

const TextFieldValidatedAdapter = ({ input, meta, ...rest }) => (
    <span className="my-form-group">
        <FormBootstrap.Control isInvalid={meta.error && meta.touched} isValid={!meta.error} {...input} {...rest} />
        {meta.error && meta.touched && <div className="error-input">{meta.error}</div>}
    </span>
);

export default TextFieldValidatedAdapter;
