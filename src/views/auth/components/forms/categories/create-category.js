import React from "react";
import Col from "react-bootstrap/Col";
import { Field, Form } from "react-final-form";
import FormBootstrap from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";

const CreateCategory = ({ message, validate, onSubmit, isSaving }) => {
    const TextFieldAdapter = ({ input, meta, ...rest }) => (
        <>
            <FormBootstrap.Control isInvalid={meta.error && meta.touched} isValid={!meta.error} {...input} {...rest} />
            {meta.error && meta.touched && <div className="error-input">{meta.error}</div>}
        </>
    );

    return (
        <div>
            <Row>
                <Col md={12}>
                    <h2>Crear Categoría</h2>
                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit }) => (
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

                                        <Button variant="primary" type="submit" disabled={isSaving}>
                                            Crear Categoría
                                            {isSaving && (
                                                <Spinner
                                                    size="sm"
                                                    style={{ verticalAlign: "middle", marginLeft: "10px" }}
                                                    animation="border"
                                                    role="status"
                                                >
                                                    <span className="visually-hidden">Cargando...</span>
                                                </Spinner>
                                            )}
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
