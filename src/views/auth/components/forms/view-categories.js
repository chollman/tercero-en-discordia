import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchingCategories } from "../../../../state/categories/actions";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

const ViewCategories = () => {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Librería | Editorial TED";
        dispatch(handleFetchingCategories());
    }, [dispatch]);

    return (
        <div>
            <Row>
                <Col md={12}>
                    <h2>Lista de Categorías</h2>
                    {categories.isFetching ? (
                        renderLoading()
                    ) : (
                        <>
                            {categories.categoriesArr.map((cat) => {
                                return (
                                    <Col className="result-list" md={12} key={cat._id}>
                                        <Button size="sm" variant="danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </Button>
                                        <Button size="sm" variant="secondary">
                                            <i className="fas fa-pen"></i>
                                        </Button>
                                        {cat.name}
                                    </Col>
                                );
                            })}
                        </>
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
