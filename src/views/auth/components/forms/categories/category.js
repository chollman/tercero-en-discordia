import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import CategoryForm from "./category-form";

const Category = ({
    category,
    onEditButtonClicked,
    onDeleteButtonClicked,
    onSubmit,
    isEditing,
    isSaving,
    formData,
    setIsEditing,
    validate,
}) => {
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
                        <CategoryForm
                            onSubmit={onSubmit}
                            setIsEditing={setIsEditing}
                            formData={formData}
                            isEditing={isEditing}
                            validate={validate}
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

export default Category;
