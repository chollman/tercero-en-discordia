import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../book-details.scss";
import HeaderBar from "../../../components/header-bar";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../../../components/footer";
import ImageLoader from "../../../ui/imageLoader";

const BookDetail = ({ book, isFetching }) => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <HeaderBar title="Librería" link="libreria" />
            {isFetching ? (
                renderLoading()
            ) : (
                <Container className="ted-book-details">
                    <Row>
                        <Col md={3}>
                            {book.hasCoverImage ? (
                                <div>
                                    <ImageLoader
                                        hidden={!show}
                                        callback={() => setShow(true)}
                                        rounded
                                        fluid
                                        src={`${process.env.REACT_APP_API_URL}/books/cover/${book._id}`}
                                    />
                                </div>
                            ) : (
                                <div className="book-cover-placeholder">No hay carátula del libro definal todavía</div>
                            )}
                            {book.hasBackCoverImage && (
                                <div>
                                    <ImageLoader
                                        hidden={!show}
                                        callback={() => setShow(true)}
                                        rounded
                                        fluid
                                        src={`${process.env.REACT_APP_API_URL}/books/backcover/${book._id}`}
                                    />
                                </div>
                            )}
                        </Col>
                        <Col md={9}>
                            <h1 className="book-title">{book.title}</h1>
                            <div className="book-author">Por {book.author}</div>
                            {book.numberOfPages && (
                                <div className="book-pages">
                                    <i className="far fa-copy"></i>
                                    {book.numberOfPages}
                                </div>
                            )}
                            <hr />
                            <div className="book-description">{book.description}</div>
                            <hr />
                            {book.category && <div className="book-category">Categoria {book.category.name}</div>}
                            <Row>
                                {book.isbn && <Col md={6}>ISBN: {book.isbn}</Col>}
                                {book.publicationDate && <Col md={6}>Publicado: {book.publicationDate}</Col>}
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

export default BookDetail;
