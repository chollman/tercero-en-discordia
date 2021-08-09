import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../state/auth/actions";

const Signup = () => {
    const dispatch = useDispatch();

    const errorMessage = useSelector((state) => state.auth.errorMessage);

    const validate = () => {};
    const onSubmit = (formProps) => {
        dispatch(signup(formProps));
    };

    useEffect(() => {
        document.title = "Registro | Editorial TED";
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
                        Registrarse
                    </button>
                </form>
            )}
        />
    );
};

export default Signup;
