import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import { Field, Form } from "react-final-form";
import FormBootstrap from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { categoryCreate } from "../../../../state/categories/actions";
import { useDispatch, useSelector } from "react-redux";

const CreateCategory = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");

    const { currentUser, authenticated } = useSelector((state) => state.auth);

    const validate = () => {};
    const onSubmit = (formProps) => {
        dispatch(
            categoryCreate(currentUser, authenticated, formProps, () => {
                setMessage("Categoría creada con éxito");
            })
        );
    };

    const TextFieldAdapter = ({ input, meta, ...rest }) => <FormBootstrap.Control {...input} {...rest} />;

    return (
        <div>
            <Row>
                <Col md={12}>
                    <h2>Crear Categoría</h2>
                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit, form, submitting }) => (
                            <Row>
                                <Col md={6}>
                                    <FormBootstrap onSubmit={handleSubmit}>
                                        <FormBootstrap.Group className="mb-3" controlId="formCreateCategory">
                                            <FormBootstrap.Label>Nombre</FormBootstrap.Label>
                                            <Field
                                                name="name"
                                                component={TextFieldAdapter}
                                                type="text"
                                                placeholder="Ingresar nombre"
                                            />
                                        </FormBootstrap.Group>

                                        <Button variant="primary" type="submit" disabled={submitting}>
                                            Crear Categoría
                                        </Button>
                                    </FormBootstrap>
                                </Col>
                            </Row>
                        )}
                    />
                    <div className={`success-message ${message ? "show-message" : ""}`}>{message}</div>
                </Col>
            </Row>
        </div>
    );
};

export default CreateCategory;
