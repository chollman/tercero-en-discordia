import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import BookForm from "./book-form";

const Book = ({
    book,
    onEditButtonClicked,
    onDeleteButtonClicked,
    isSaving,
    onSubmit,
    validate,
    formData,
    showEditModal,
    handleCloseEditModal,
}) => {
    return (
        <Row className="admin-item">
            <Col md={12}>
                <Button size="sm" variant="danger" onClick={() => onDeleteButtonClicked(book)}>
                    <i className="fas fa-trash-alt" />
                </Button>
                <Button size="sm" variant="secondary" onClick={() => onEditButtonClicked(book)}>
                    <i className="fas fa-pen" />
                </Button>
                {book.hasCoverImage && (
                    <span className="book-image">
                        <span className="image-container">
                            <Image src={`${process.env.REACT_APP_API_URL}/books/cover/${book._id}`} height={100} />
                        </span>
                    </span>
                )}
                <span className="name">{book.title}</span>
                {isSaving && (
                    <Spinner size="sm" style={{ verticalAlign: "middle" }} animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                )}
            </Col>
            {renderModal(book, onSubmit, formData, validate, showEditModal, handleCloseEditModal)}
        </Row>
    );
};

const renderModal = (book, onSubmit, formData, validate, showEditModal, handleCloseEditModal) => {
    return (
        <Modal size="lg" show={showEditModal} onHide={handleCloseEditModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar libro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BookForm book={book} formData={formData} validate={validate} onSubmit={onSubmit} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>
                    Cancelar
                </Button>
                <Button variant="primary" type="submit" form="book-form" onClick={handleCloseEditModal}>
                    Guardar cambios
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Book;
