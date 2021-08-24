import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import CategoryForm from "../../../containers/forms/categories/category-form";

const ViewCategories = ({ categories }) => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <h2>Lista de Categorías</h2>
                    {categories.isFetching ? (
                        renderLoading()
                    ) : (
                        <Col className="result-list" md={12}>
                            {categories.categoriesArr.map((cat) => {
                                return <CategoryForm key={cat._id} category={cat} />;
                            })}
                        </Col>
                    )}
                </Col>
            </Row>
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

export default ViewCategories;
