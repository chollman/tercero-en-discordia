import React, { useEffect } from "react";
import { handleFetchingBook } from "../../../state/books/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../libreria.scss";

const BookDetailContainer = () => {
    const dispatch = useDispatch();
    let { bookId } = useParams();
    const currentBook = useSelector((state) => state.books.currentBook);

    useEffect(() => {
        document.title = "Librería | Editorial TED";
        dispatch(handleFetchingBook(bookId));
    }, [bookId, dispatch]);

    return <div>Detalle {currentBook.title}</div>;
};

export default BookDetailContainer;
