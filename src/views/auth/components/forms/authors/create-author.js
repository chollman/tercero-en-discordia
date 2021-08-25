import React from "react";
import Col from "react-bootstrap/Col";
import { Field, Form } from "react-final-form";
import FormBootstrap from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import TextAreaAdapter from "../../../../../ui/forms/text-area-adapter";
import TextFieldValidatedAdapter from "../../../../../ui/forms/text-field-validated-adapter";
import TextFieldAdapter from "../../../../../ui/forms/text-field-adapter";
import FileAdapter from "../../../../../ui/forms/file-adapter";

const CreateAuthor = ({ message, validate, onSubmit, isSaving }) => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <h2>Crear Autor</h2>
                    <Form
                        onSubmit={onSubmit}
                        validate={validate}
                        render={({ handleSubmit }) => (
                            <Row>
                                <Col md={6}>
                                    <FormBootstrap onSubmit={handleSubmit}>
                                        <FormBootstrap.Group className="mb-3" controlId="formAuthorName">
                                            <FormBootstrap.Label>Nombre</FormBootstrap.Label>
                                            <Field
                                                name="name"
                                                component={TextFieldValidatedAdapter}
                                                type="text"
                                                placeholder="Ingresar nombre"
                                            />
                                        </FormBootstrap.Group>
                                        <FormBootstrap.Group className="mb-3" controlId="formAuthorBiography">
                                            <FormBootstrap.Label>Biografía</FormBootstrap.Label>
                                            <Field
                                                name="biography"
                                                component={TextAreaAdapter}
                                                type="text"
                                                placeholder="Ingresar biografía"
                                            />
                                        </FormBootstrap.Group>
                                        <FormBootstrap.Group className="mb-3" controlId="formAuthorPhoto">
                                            <FormBootstrap.Label>Foto del autor</FormBootstrap.Label>
                                            <Field name="photo" component={FileAdapter} type="file" />
                                        </FormBootstrap.Group>
                                        <FormBootstrap.Group className="mb-3" controlId="formAuthorTwitter">
                                            <FormBootstrap.Label>Link de Twitter</FormBootstrap.Label>
                                            <Field
                                                name="twitterLink"
                                                component={TextFieldAdapter}
                                                type="text"
                                                placeholder="Link de Twitter"
                                            />
                                        </FormBootstrap.Group>
                                        <FormBootstrap.Group className="mb-3" controlId="formAuthorInstagram">
                                            <FormBootstrap.Label>Link de Instagram</FormBootstrap.Label>
                                            <Field
                                                name="instagramLink"
                                                component={TextFieldAdapter}
                                                type="text"
                                                placeholder="Link de Instagram"
                                            />
                                        </FormBootstrap.Group>
                                        <FormBootstrap.Group className="mb-3" controlId="formAuthorFacebook">
                                            <FormBootstrap.Label>Link de Facebook</FormBootstrap.Label>
                                            <Field
                                                name="facebookLink"
                                                component={TextFieldAdapter}
                                                type="text"
                                                placeholder="Link de Facebook"
                                            />
                                        </FormBootstrap.Group>

                                        <Button variant="primary" type="submit" disabled={isSaving}>
                                            Crear Autor
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

export default CreateAuthor;
