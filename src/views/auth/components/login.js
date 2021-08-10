import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../state/auth/actions";

const Login = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    const errorMessage = useSelector((state) => state.auth.errorMessage);

    const validate = () => {};
    const onSubmit = (formProps) => {
        dispatch(
            login(formProps, () => {
                history.push("/admin");
            })
        );
    };

    useEffect(() => {
        document.title = "Login | Editorial TED";
    }, []);

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, form, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label>Email</label>
                        <Field name="email" component="input" type="text" placeholder="Email" />
                    </fieldset>
                    <fieldset>
                        <label>Contraseña</label>
                        <Field name="password" component="input" type="password" placeholder="Contraseña" />
                    </fieldset>
                    <div>{errorMessage}</div>
                    <button type="submit" disabled={submitting}>
                        Login
                    </button>
                </form>
            )}
        />
    );
};

export default Login;
