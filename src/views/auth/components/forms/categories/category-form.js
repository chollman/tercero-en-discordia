import React from "react";
import FormBootstrap from "react-bootstrap/Form";
import { Form, Field } from "react-final-form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const CategoryForm = ({
    category,
    onEditButtonClicked,
    onDeleteButtonClicked,
    onSubmit,
    isEditing,
    isSaving,
    formData,
    setIsEditing,
}) => {
    const TextFieldAdapter = ({ input, meta, ...rest }) => <FormBootstrap.Control {...input} {...rest} />;

    return (
        <Row className="admin-item">
            <Col md={12}>
                <Button size="sm" variant="danger" onClick={onDeleteButtonClicked}>
                    <i className="fas fa-trash-alt" />
                </Button>
                <Button size="sm" variant="secondary" onClick={onEditButtonClicked}>
                    <i className="fas fa-pen" />
                </Button>
                {isEditing ? (
                    <>
                        <Form
                            onSubmit={onSubmit}
                            validate={() => {}}
                            initialValues={{
                                ...formData,
                            }}
                            render={({ handleSubmit, submitting }) => (
                                <FormBootstrap className="edit-category-form" onSubmit={handleSubmit}>
                                    <Field
                                        name="name"
                                        component={TextFieldAdapter}
                                        type="text"
                                        placeholder="Ingresar nombre"
                                    />

                                    <Button variant="primary" size="sm" type="submit" disabled={submitting}>
                                        Confirmar
                                    </Button>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        disabled={submitting}
                                        onClick={() => setIsEditing(false)}
                                    >
                                        <i className="fas fa-times" />
                                    </Button>
                                </FormBootstrap>
                            )}
                        />
                        {isSaving && (
                            <Spinner size="sm" style={{ verticalAlign: "middle" }} animation="border" role="status">
                                <span className="visually-hidden">Cargando...</span>
                            </Spinner>
                        )}
                    </>
                ) : (
                    <span>{category.name}</span>
                )}
            </Col>
        </Row>
    );
};

export default CategoryForm;
