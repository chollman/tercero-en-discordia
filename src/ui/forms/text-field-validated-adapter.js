import FormBootstrap from "react-bootstrap/Form";
import React from "react";

const TextFieldValidatedAdapter = ({ input, meta, inputOnChange, ...rest }) => {
    const inputProps = {
        ...input,
        onChange: (e) => {
            input.onChange(e);
            inputOnChange && inputOnChange(e);
        },
    };
    return (
        <span className="my-form-group">
            <FormBootstrap.Control
                {...inputProps}
                value={input.value}
                isInvalid={meta.error && meta.touched}
                isValid={!meta.error}
                {...rest}
            />
            {meta.error && meta.touched && <div className="error-input">{meta.error}</div>}
        </span>
    );
};

export default TextFieldValidatedAdapter;
