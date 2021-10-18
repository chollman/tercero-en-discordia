import React, { useEffect } from "react";
import { handleFetchingBook, handleFetchingRelatedBooks } from "../../../state/books/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookDetail from "../components/book-detail";

import "../libreria.scss";

const BookDetailContainer = () => {
    const dispatch = useDispatch();
    const { bookId } = useParams();
    const { currentBook, isFetching, relatedBooks, isFetchingRelated } = useSelector((state) => state.books);

    useEffect(() => {
        document.title = "Librería | Editorial TED";
        dispatch(handleFetchingBook(bookId));
        dispatch(handleFetchingRelatedBooks(bookId));
    }, [bookId, dispatch]);

    return (
        <BookDetail
            book={currentBook}
            isFetching={isFetching}
            relatedBooks={relatedBooks}
            isFetchingRelated={isFetchingRelated}
        />
    );
};

export default BookDetailContainer;
