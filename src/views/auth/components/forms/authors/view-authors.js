import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Author from "../../../containers/forms/authors/author";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AuthorForm from "./author-form";

const ViewAuthors = ({
    authors,
    showEditModal,
    handleCloseEditModal,
    onCreateAuthorButtonClicked,
    validate,
    onSubmit,
}) => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <div>
                        <h2 className="inline-heading">Lista de Autores</h2>
                        <Button variant="primary" type="submit" onClick={onCreateAuthorButtonClicked}>
                            Nuevo Autor
                        </Button>
                    </div>
                    {authors.isFetching ? (
                        renderLoading()
                    ) : (
                        <Col className="result-list" md={12}>
                            {authors.authorsArr.map((author) => {
                                return <Author key={author._id} author={author} />;
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
                <Modal.Title>Crear autor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AuthorForm validate={validate} onSubmit={onSubmit} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>
                    Cerrar
                </Button>
                <Button variant="primary" type="submit" form={`author-form`} onClick={handleCloseEditModal}>
                    Crear autor
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewAuthors;
