import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "../book-details.scss";
import HeaderBar from "../../../components/header-bar";
import Spinner from "react-bootstrap/Spinner";
import Footer from "../../../components/footer";
import ImageLoader from "../../../ui/imageLoader";
import moment from "moment";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import Book from "./book";

const BookDetail = ({ book, isFetching, relatedBooks, isFetchingRelated, shareReady }) => {
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
                                <div className="book-cover">
                                    <ImageLoader
                                        hidden={!show}
                                        callback={() => setShow(true)}
                                        rounded
                                        fluid
                                        src={`${process.env.REACT_APP_API_URL}/books/cover/${book._id}`}
                                    />
                                </div>
                            ) : (
                                <div className="book-cover-placeholder">No hay carátula del libro definida todavía</div>
                            )}
                            {book.hasBackCoverImage && (
                                <div className="book-cover">
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
                            <h5 className="book-author">
                                Por <span>{book.authors && getAuthors(book.authors)}</span>
                            </h5>
                            {book.numberOfPages && (
                                <div className="book-pages">
                                    <i className="far fa-copy" />
                                    {book.numberOfPages} páginas
                                </div>
                            )}
                            <hr />
                            <div className="book-description">{book.description}</div>
                            <hr />
                            <div className="book-category">
                                {book.categories &&
                                    book.categories.map((category) => {
                                        return (
                                            <LinkContainer key={category.name} to={`/libreria/${category._id}`}>
                                                <Button size="sm">{category.name}</Button>
                                            </LinkContainer>
                                        );
                                    })}
                            </div>
                            <Row className="book-data">
                                {book.isbn && <Col md={6}>ISBN: {book.isbn}</Col>}
                                {book.publicationDate && (
                                    <Col md={6}>Publicado: {moment(book.publicationDate).format("DD/MM/YYYY")}</Col>
                                )}
                            </Row>
                            <Row className="mt-5">
                                <Col md={6}>
                                    <a rel="noreferrer" target="_blank" href={book.linkToEbook}>
                                        <Button variant="warning" block>
                                            Comprar versión Ebook
                                        </Button>
                                    </a>
                                </Col>
                                <Col md={6}>
                                    <a rel="noreferrer" target="_blank" href={book.linkToPaperBook}>
                                        <Button variant="warning" color="white" block>
                                            Comprar versión papel
                                        </Button>
                                    </a>
                                </Col>
                            </Row>
                            <hr />
                            {book.authors && book.authors.length > 0 && (
                                <>
                                    {book.authors.length > 1 && <h5>Sobre los autores</h5>}
                                    {book.authors.length === 1 && <h5>Sobre el autor</h5>}
                                    {book.authors.map((author) => {
                                        return (
                                            <div className="author" key={author._id}>
                                                <Row>
                                                    <Col>
                                                        {author.hasPhoto && (
                                                            <span className="author-image">
                                                                <span className="image-container">
                                                                    <Image
                                                                        src={`${process.env.REACT_APP_API_URL}/authors/photo/${author._id}`}
                                                                        height={100}
                                                                    />
                                                                </span>
                                                            </span>
                                                        )}
                                                        <span className="author-name">{author.name}</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="author-bio">{author.biography}</Col>
                                                </Row>
                                            </div>
                                        );
                                    })}
                                </>
                            )}
                        </Col>
                    </Row>
                    <Row>
                        {shareReady && (
                            <Col md={12}>
                                <h3>Compartir</h3>
                                <div className="sharethis-inline-share-buttons" />
                            </Col>
                        )}
                        <Col md={12}>
                            <h3>Dejar un comentario sobre este libro</h3>
                            <div
                                className="fb-comments"
                                data-href={`${process.env.REACT_APP_URL}/libreria/libro/${book._id}`}
                                data-width="100%"
                                data-numposts="5"
                            />
                        </Col>
                    </Row>
                    {isFetchingRelated ? (
                        renderLoading()
                    ) : (
                        <Row>
                            <Col md={12}>
                                <h3>TITULOS RELACIONADOS</h3>
                                <Row>
                                    {relatedBooks.map((book) => {
                                        return (
                                            <Col className="related-book" md={2} key={book._id}>
                                                <Book book={book} />
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    )}
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

const getAuthors = (authors) => {
    let buffer = authors[0].name;
    for (let i = 1; i < authors.length; i++) {
        if (i === authors.length - 1) {
            buffer = buffer + " y " + authors[i].name;
            continue;
        }
        buffer = buffer + ", " + authors[i].name;
    }
    return buffer;
};

export default BookDetail;
