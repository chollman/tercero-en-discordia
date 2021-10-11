import React, { useEffect } from "react";
import Libreria from "../components/libreria";
import {
    handleFetchingBooks,
    handleFetchingBooksCategories,
    handleFetchingBooksByCategory,
} from "../../../state/books/actions";

import "../libreria.scss";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const LibreriaContainer = () => {
    const books = useSelector((state) => state.books);
    const { catId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Librería | Editorial TED";
        if (catId) {
            dispatch(handleFetchingBooksByCategory(catId));
        } else {
            dispatch(handleFetchingBooks());
        }
        dispatch(handleFetchingBooksCategories());
    }, [catId, dispatch]);

    const category = books.categoriesInUse.filter((cat) => {
        return cat._id === catId;
    })[0];

    return <Libreria books={books} category={category} />;
};

export default LibreriaContainer;
