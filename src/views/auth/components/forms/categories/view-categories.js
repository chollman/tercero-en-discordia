import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Category from "../../../containers/forms/categories/category";
import CategoryForm from "../../../components/forms/categories/category-form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ViewCategories = ({
    categories,
    onCreateCategoryButtonClicked,
    validate,
    onSubmit,
    showEditModal,
    handleCloseEditModal,
}) => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <div>
                        <h2 className="inline-heading">Lista de Categorías</h2>
                        <Button variant="primary" type="submit" onClick={onCreateCategoryButtonClicked}>
                            Nueva categoría
                        </Button>
                    </div>
                    {categories.isFetching ? (
                        renderLoading()
                    ) : (
                        <Col className="result-list" md={12}>
                            {categories.categoriesArr.map((cat) => {
                                return <Category key={cat._id} category={cat} />;
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
                <Modal.Title>Editar categoría</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CategoryForm validate={validate} onSubmit={onSubmit} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>
                    Cerrar
                </Button>
                <Button variant="primary" type="submit" form="category-form" onClick={handleCloseEditModal}>
                    Crear categoría
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ViewCategories;
