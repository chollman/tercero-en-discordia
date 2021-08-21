import React from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";

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
                                    <LinkContainer to={`/libreria/libro/${book._id}`}>
                                        <div className="ted-book">
                                            <div className="ted-book-cover">
                                                {book.hasCoverImage && (
                                                    <div>
                                                        <Image
                                                            rounded
                                                            className="closing-quote"
                                                            src={`${process.env.REACT_APP_API_URL}/books/cover/${book._id}`}
                                                            fluid
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                            <h3>{book.title}</h3>
                                            <i>{book.author}</i>
                                        </div>
                                    </LinkContainer>
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
    return <div>loading</div>;
};
const renderError = () => {
    return <div>error</div>;
};

export default Libreria;
