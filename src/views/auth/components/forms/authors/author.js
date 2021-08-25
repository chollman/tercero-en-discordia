import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import AuthorForm from "./author-form";

const Author = ({
    author,
    onEditButtonClicked,
    onDeleteButtonClicked,
    isSaving,
    formData,
    onSubmit,
    validate,
    showEditModal,
    handleCloseEditModal,
}) => {
    return (
        <Row className="admin-item">
            <Col md={12}>
                <Button size="sm" variant="danger" onClick={() => onDeleteButtonClicked(author)}>
                    <i className="fas fa-trash-alt" />
                </Button>
                <Button size="sm" variant="secondary" onClick={() => onEditButtonClicked(author)}>
                    <i className="fas fa-pen" />
                </Button>
                {author.hasPhoto && (
                    <span className="author-image">
                        <span className="image-container">
                            <Image src={`${process.env.REACT_APP_API_URL}/authors/photo/${author._id}`} height={100} />
                        </span>
                    </span>
                )}
                <span className="name">{author.name}</span>
                {isSaving && (
                    <Spinner size="sm" style={{ verticalAlign: "middle" }} animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                )}
            </Col>
            {renderModal(author, formData, onSubmit, validate, showEditModal, handleCloseEditModal)}
        </Row>
    );
};

const renderModal = (author, formData, onSubmit, validate, showEditModal, handleCloseEditModal) => {
    return (
        <Modal size="lg" show={showEditModal} onHide={handleCloseEditModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar autor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AuthorForm author={author} validate={validate} formData={formData} onSubmit={onSubmit} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>
                    Close
                </Button>
                <Button variant="primary" type="submit" form={`author-form`} onClick={handleCloseEditModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Author;
