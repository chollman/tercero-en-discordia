import React, { useEffect } from "react";
import { handleFetchingBooks } from "../../../../state/books/actions";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RecentWorks from "../../components/sections/recent-works";

const RecentWorksContainer = () => {
    const dispatch = useDispatch();
    const { bookId } = useParams();
    const books = useSelector((state) => state.books);

    useEffect(() => {
        document.title = "Librería | Editorial TED";
        dispatch(handleFetchingBooks(6));
    }, [bookId, dispatch]);

    return <RecentWorks books={books} />;
};

export default RecentWorksContainer;
