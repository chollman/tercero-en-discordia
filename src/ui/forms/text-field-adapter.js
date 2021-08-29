import React from "react";
import FormBootstrap from "react-bootstrap/Form";

const TextFieldAdapter = ({ input, meta, inputOnChange, ...rest }) => {
    const inputProps = {
        ...input,
        onChange: (e) => {
            input.onChange(e);
            inputOnChange && inputOnChange(e);
        },
    };
    return (
        <span className="my-form-group">
            <FormBootstrap.Control {...inputProps} value={input.value} {...rest} />
            {meta.error && meta.touched && <div className="error-input">{meta.error}</div>}
        </span>
    );
};
export default TextFieldAdapter;
