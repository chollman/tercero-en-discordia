import { MDBFile } from "mdb-react-ui-kit";
import React from "react";

const FileAdapter = ({ input, meta, ...rest }) => (
    <span className="my-form-group">
        <MDBFile name={input.name} onChange={({ target }) => input.onChange(target.files[0])} {...rest} />
        {meta.error && meta.touched && <div className="error-input">{meta.error}</div>}
    </span>
);

export default FileAdapter;
