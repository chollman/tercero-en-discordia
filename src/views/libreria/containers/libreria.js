import React, { useEffect } from "react";
import Libreria from "../components/libreria";
import { handleFetchingBooks, handleFetchingBooksCategories } from "../../../state/books/actions";

import "../libreria.scss";
import { useDispatch, useSelector } from "react-redux";

const LibreriaContainer = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Librería | Editorial TED";
        dispatch(handleFetchingBooks());
        dispatch(handleFetchingBooksCategories());
    }, [dispatch]);

    return <Libreria books={books} />;
};

export default LibreriaContainer;
