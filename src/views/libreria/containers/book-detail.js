import React, { useEffect } from "react";
import { handleFetchingBook, handleFetchingRelatedBooks } from "../../../state/books/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookDetail from "../components/book-detail";
import { usePrevious } from "../../../utils/customHooks";

import "../libreria.scss";

const BookDetailContainer = () => {
    const dispatch = useDispatch();
    const { bookId } = useParams();
    const { currentBook, isFetching, relatedBooks, isFetchingRelated } = useSelector((state) => state.books);
    const prevBookId = usePrevious(bookId);

    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
        document.title = currentBook.title ? `${currentBook.title} | Editorial TED` : `Librería | Editorial TED`;
        window.scrollTo(0, 0);

        if (bookId !== prevBookId) {
            dispatch(handleFetchingBook(bookId));
            dispatch(handleFetchingRelatedBooks(bookId));
        }
    }, [currentBook, bookId, prevBookId, dispatch]);

    const changeCurrentBook = (book) => {
        dispatch(handleFetchingBook(book._id));
        dispatch(handleFetchingRelatedBooks(book._id));
    };

    return (
        <BookDetail
            book={currentBook}
            isFetching={isFetching}
            relatedBooks={relatedBooks}
            isFetchingRelated={isFetchingRelated}
            changeCurrentBook={changeCurrentBook}
        />
    );
};

export default BookDetailContainer;
