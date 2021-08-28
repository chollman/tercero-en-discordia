import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

const Book = ({
    book,
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
            {renderModal(book, formData, onSubmit, validate, showEditModal, handleCloseEditModal)}
        </Row>
    );
};

const renderModal = (book, formData, onSubmit, validate, showEditModal, handleCloseEditModal) => {
    return (
        <Modal size="lg" show={showEditModal} onHide={handleCloseEditModal}>
            <Modal.Header closeButton>
                <Modal.Title>Editar autor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                MODAL EDIT FORM
                {/*<AuthorForm author={author} validate={validate} formData={formData} onSubmit={onSubmit} />*/}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>
                    Close
                </Button>
                <Button variant="primary" type="submit" form={`book-form`} onClick={handleCloseEditModal}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Book;
