import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Book from "../../../containers/forms/books/book";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import BookForm from "./book-form";

const ViewBooks = ({ books, showEditModal, handleCloseEditModal, onCreateBooksButtonClicked, validate, onSubmit }) => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <div>
                        <h2 className="inline-heading">Lista de Libros</h2>
                        <Button variant="primary" type="submit" onClick={onCreateBooksButtonClicked}>
                            Nuevo Libro
                        </Button>
                    </div>
                    {books.isFetching ? (
                        renderLoading()
                    ) : (
                        <Col className="result-list" md={12}>
                            {books.booksArr.map((book) => {
                                return <Book key={book._id} book={book} />;
                            })}
                        </Col>
                    )}
                </Col>
            </Row>
            {renderModal(onSubmit, validate, showEditModal, handleCloseEditModal)}
        </div>
    );
};

const renderLoading = () => {
    return (
        <Container>
            <Row>
                <Col className="ted-spinner-common" md={12}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                </Col>
            </Row>
        </Container>
    );
};

const renderModal = (onSubmit, validate, showEditModal, handleCloseEditModal) => {
    return (
        <Modal size="lg" show={showEditModal} onHide={handleCloseEditModal}>
            <Modal.Header closeButton>
                <Modal.Title>Crear libro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BookForm validate={validate} onSubmit={onSubmit} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>
                    Cerrar
                </Button>
                <Button variant="primary" type="submit" form="book-form">
                    Crear libro
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewBooks;
