import React, { useState } from "react";
import FormBootstrap from "react-bootstrap/Form";
import { Form, Field } from "react-final-form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { categoryDelete, categoryEdit } from "../../../../state/categories/actions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";

const CategoryForm = ({ category }) => {
    const [isEditing, setIsEditing] = useState(false);

    const { isEditingOne } = useSelector((state) => state.categories);
    const { currentUser, authenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onSubmit = (formProps) => {
        dispatch(
            categoryEdit(currentUser, authenticated, category._id, formProps, () => {
                setIsEditing(false);
            })
        );
    };

    const onDeleteButtonClicked = () => {
        dispatch(categoryDelete(currentUser, authenticated, category._id));
    };

    const onEditButtonClicked = () => {
        setIsEditing(true);
    };

    const TextFieldAdapter = ({ input, meta, ...rest }) => <FormBootstrap.Control {...input} {...rest} />;

    return (
        <Row className="category-item">
            <Col md={12}>
                <Button size="sm" variant="danger" onClick={onDeleteButtonClicked}>
                    <i className="fas fa-trash-alt"></i>
                </Button>
                <Button size="sm" variant="secondary" onClick={onEditButtonClicked}>
                    <i className="fas fa-pen"></i>
                </Button>
                {isEditing ? (
                    <>
                        <Form
                            onSubmit={onSubmit}
                            validate={() => {}}
                            render={({ handleSubmit, form, submitting }) => (
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
                                        <i className="fas fa-times"></i>
                                    </Button>
                                </FormBootstrap>
                            )}
                        />
                        {isEditingOne && (
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
