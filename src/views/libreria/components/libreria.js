import React from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";
import Image from "react-bootstrap/Image";

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
                <div>
                    <div>En total hay {books.numberOfBooks} libros:</div>
                    <div>
                        {books.booksArr.map((book) => {
                            return (
                                <div key={book._id}>
                                    <div>{book.title}</div>
                                    <div>{book.description}</div>
                                    <div>{book.author}</div>
                                    {book.coverImage && (
                                        <div>
                                            <Image
                                                className="closing-quote"
                                                src={`${process.env.REACT_APP_API_URL}/books/cover/${book._id}`}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
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
