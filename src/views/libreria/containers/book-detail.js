import React, { useEffect } from "react";
import { handleFetchingBook } from "../../../state/books/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookDetail from "../components/book-detail";

import "../libreria.scss";

const BookDetailContainer = () => {
    const dispatch = useDispatch();
    let { bookId } = useParams();
    const { currentBook, isFetching } = useSelector((state) => state.books);

    useEffect(() => {
        document.title = "Librería | Editorial TED";
        dispatch(handleFetchingBook(bookId));
    }, [bookId, dispatch]);

    return <BookDetail book={currentBook} isFetching={isFetching} />;
};

export default BookDetailContainer;
