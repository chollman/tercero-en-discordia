import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Book from "../../../libreria/components/book";

const RecentWorks = ({ books }) => {
    return (
        <section className="main-section" id="recent-works">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h3>Últimos libros publicados</h3>
                        <p className="lead">Autores que ya están promocionando sus libros. ¡Sumate!</p>
                        {books.isFetching ? (
                            renderLoading()
                        ) : (
                            <Row>
                                {books.booksArr.map((book) => {
                                    return (
                                        <Col md={2} key={book._id}>
                                            <Book book={book} />
                                        </Col>
                                    );
                                })}
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
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

export default RecentWorks;
