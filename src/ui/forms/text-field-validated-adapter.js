import FormBootstrap from "react-bootstrap/Form";
import React from "react";

const TextFieldValidatedAdapter = ({ input, meta, ...rest }) => (
    <>
        <FormBootstrap.Control isInvalid={meta.error && meta.touched} isValid={!meta.error} {...input} {...rest} />
        {meta.error && meta.touched && <div className="error-input">{meta.error}</div>}
    </>
);

export default TextFieldValidatedAdapter;
