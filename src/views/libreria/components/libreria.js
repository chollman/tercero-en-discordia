import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";
import { handleFetchingBooks } from "../../../state/books/actions";

import "../libreria.scss";
import { useDispatch, useSelector } from "react-redux";

const Libreria = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Librería | Editorial TED";
        dispatch(handleFetchingBooks());
    }, [dispatch]);

    return (
        <div className="ted-libreria">
            <HeaderBar title="Librería" link="libreria" />
            <div>{books.numberOfBooks}</div>
            <div>
                {books.booksArr.map((book) => {
                    return <div key={book.name}>{book.name}</div>;
                })}
            </div>
            <Footer />
        </div>
    );
};

export default Libreria;
