import React, { useEffect, useState } from "react";
import { handleFetchingBook, handleFetchingRelatedBooks } from "../../../state/books/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookDetail from "../components/book-detail";
import "../libreria.scss";

const BookDetailContainer = () => {
    const dispatch = useDispatch();
    const { bookId } = useParams();
    const { currentBook, isFetching, relatedBooks, isFetchingRelated } = useSelector((state) => state.books);
    const [shareReady, setShareReady] = useState(false);

    const scriptLoaded = () => {
        setShareReady(true);
    };

    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
        document.title = currentBook.title ? `${currentBook.title} | Editorial TED` : `Librería | Editorial TED`;
        window.scrollTo(0, 0);
        if (!currentBook.title) {
            dispatch(handleFetchingBook(bookId));
            dispatch(handleFetchingRelatedBooks(bookId));

            const rand = Math.round(Math.random() * 1000000000);
            const sharingScript = document.createElement("script");
            sharingScript.src = `https://platform-api.sharethis.com/js/sharethis.js#property=61719c2f6c54f40014a7fad0&product=inline-share-buttons&${rand}`;
            sharingScript.async = true;
            sharingScript.onload = () => scriptLoaded();
            document.head.appendChild(sharingScript);
        }
    }, [currentBook, bookId, dispatch]);

    return (
        <BookDetail
            book={currentBook}
            isFetching={isFetching}
            relatedBooks={relatedBooks}
            isFetchingRelated={isFetchingRelated}
            shareReady={shareReady}
        />
    );
};

export default BookDetailContainer;
