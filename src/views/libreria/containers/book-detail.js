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
        if (window.FB) {
            window.FB.XFBML.parse();
        }
        document.title = currentBook.title ? `${currentBook.title} | Editorial TED` : `Librería | Editorial TED`;
        window.scrollTo(0, 0);
        if (!currentBook.title) {
            dispatch(handleFetchingBook(bookId));
            dispatch(handleFetchingRelatedBooks(bookId));
        }
    }, [currentBook, bookId, dispatch]);

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
