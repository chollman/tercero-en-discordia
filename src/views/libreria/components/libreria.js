import React from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import Book from "./book";
import { LinkContainer } from "react-router-bootstrap";
import SearchBooks from "../../../ui/search/search-books";

import "../libreria.scss";

const Libreria = ({ books, category, onSearchBooksChange }) => {
    if (books.errorMessage) {
        return renderError(books.errorMessage);
    }

    return (
        <div className="ted-libreria">
            <HeaderBar title="Librería" link="libreria" />
            {books.isFetching ? (
                renderLoading()
            ) : (
                <Container>
                    <Row>
                        <Col className="categories-list" md={2}>
                            <h3>Categorías</h3>
                            <ListGroup variant="flush">
                                <LinkContainer to="/libreria">
                                    <ListGroup.Item>Todos</ListGroup.Item>
                                </LinkContainer>
                                {books.categoriesInUse.map((cat) => {
                                    return (
                                        <LinkContainer key={cat._id} to={`/libreria/${cat._id}`}>
                                            <ListGroup.Item>{cat.name}</ListGroup.Item>
                                        </LinkContainer>
                                    );
                                })}
                            </ListGroup>
                        </Col>
                        <Col md={10}>
                            {category && (
                                <Row>
                                    <Col className="category-title" md={12}>
                                        <h3>Categoría {category.name}</h3>
                                    </Col>
                                </Row>
                            )}
                            <Row>
                                <Col className="mt-3">
                                    <SearchBooks resultArr={books.booksArr} onSearchChange={onSearchBooksChange} />
                                </Col>
                            </Row>
                            <Row>
                                {books.booksArr.map((book) => {
                                    return (
                                        <Col md={3} key={book._id}>
                                            <Book book={book} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            )}
            <Footer />
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
const renderError = () => {
    return <div>error</div>;
};

export default Libreria;
