import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewBooks from "../../../components/forms/books/view-books";
import { handleFetchingBooks } from "../../../../../state/books/actions";

const ViewBooksContainer = () => {
    const dispatch = useDispatch();

    const [showEditModal, setShowEditModal] = useState(false);

    const books = useSelector((state) => state.books);
    //const { currentUser, authenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(handleFetchingBooks());
    }, [dispatch]);

    // const onSubmit = (formProps) => {
    //     dispatch(authorCreate(currentUser, authenticated, formProps));
    //     handleCloseEditModal();
    // };

    // const validate = (values) => {
    //     const errors = {};
    //     if (!values.name) {
    //         errors.name = "Campo obligatorio";
    //     }
    //     if (values.name && values.name.length < 4) {
    //         errors.name = "El nombre debe tener más de 4 letras";
    //     }
    //     return errors;
    // };

    const onCreateBooksButtonClicked = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    return (
        <ViewBooks
            books={books}
            handleCloseEditModal={handleCloseEditModal}
            showEditModal={showEditModal}
            onCreateBooksButtonClicked={onCreateBooksButtonClicked}
            //validate={validate}
            //onSubmit={onSubmit}
        />
    );
};

export default ViewBooksContainer;
