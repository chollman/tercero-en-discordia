import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../state/auth/actions";
import FormBootstrap from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

    const TextFieldAdapter = ({ input, meta, ...rest }) => <FormBootstrap.Control {...input} {...rest} />;

    return (
        <section className="main-section main-info">
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={3}>
                        <Form
                            onSubmit={onSubmit}
                            validate={validate}
                            render={({ handleSubmit, form, submitting }) => (
                                <div>
                                    <FormBootstrap onSubmit={handleSubmit}>
                                        <FormBootstrap.Group className="mb-3" controlId="formBasicEmail">
                                            <FormBootstrap.Label>Email</FormBootstrap.Label>
                                            <Field
                                                name="email"
                                                component={TextFieldAdapter}
                                                type="text"
                                                placeholder="Email"
                                            />
                                        </FormBootstrap.Group>

                                        <FormBootstrap.Group className="mb-3" controlId="formBasicPassword">
                                            <FormBootstrap.Label>Password</FormBootstrap.Label>
                                            <Field
                                                name="password"
                                                component={TextFieldAdapter}
                                                type="password"
                                                placeholder="Contraseña"
                                            />
                                        </FormBootstrap.Group>
                                        <Button variant="primary" type="submit" disabled={submitting}>
                                            Submit
                                        </Button>
                                    </FormBootstrap>
                                </div>
                            )}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
