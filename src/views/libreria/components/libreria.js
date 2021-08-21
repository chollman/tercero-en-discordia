import React from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import Book from "./book";

import "../libreria.scss";

const Libreria = ({ books }) => {
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
                        {books.booksArr.map((book) => {
                            return (
                                <Col md={3} key={book._id}>
                                    <Book book={book} />
                                </Col>
                            );
                        })}
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
