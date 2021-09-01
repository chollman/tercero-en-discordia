import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewBooks from "../../../components/forms/books/view-books";
import { bookCreate, handleFetchingBooks } from "../../../../../state/books/actions";
import { FORM_ERROR } from "final-form";
import { extractIds } from "../../../../../utils/utils";

const ViewBooksContainer = () => {
    const dispatch = useDispatch();

    const [showEditModal, setShowEditModal] = useState(false);

    const books = useSelector((state) => state.books);
    const { currentUser, authenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(handleFetchingBooks());
    }, [dispatch]);

    const onSubmit = (formProps) => {
        if (!formProps.categories || formProps.categories.length === 0) {
            return { [FORM_ERROR]: "El libro debe tener al menos una categoría" };
        }
        if (!formProps.authors || formProps.authors.length === 0) {
            return { [FORM_ERROR]: "El libro debe tener al menos un autor" };
        }

        formProps.authors = extractIds(formProps.authors);
        formProps.categories = extractIds(formProps.categories);

        dispatch(bookCreate(currentUser, authenticated, formProps));
        handleCloseEditModal();
    };

    const validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = "Campo obligatorio";
        }
        if (values.title && values.title.length < 4) {
            errors.title = "El título debe tener más de 4 letras";
        }
        return errors;
    };

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
            validate={validate}
            onSubmit={onSubmit}
        />
    );
};

export default ViewBooksContainer;
