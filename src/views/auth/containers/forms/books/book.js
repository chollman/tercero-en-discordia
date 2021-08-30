import React, { useState } from "react";
import Book from "../../../components/forms/books/book";
import { useDispatch, useSelector } from "react-redux";
import { bookEdit, selectBook } from "../../../../../state/books/actions";
import { extractIds } from "../../../../../utils/utils";

const BookContainer = ({ book }) => {
    const dispatch = useDispatch();

    const [isSaving, setIsSaving] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const { currentUser, authenticated } = useSelector((state) => state.auth);

    const onSubmit = (formProps) => {
        setIsSaving(true);
        formProps.authors = extractIds(formProps.authors);
        formProps.categories = extractIds(formProps.categories);

        console.log("BOOK SENDING", formProps);
        dispatch(
            bookEdit(currentUser, authenticated, book._id, formProps, () => {
                setIsSaving(false);
            })
        );
        handleCloseEditModal();
    };

    const validate = (values) => {
        const errors = {};
        if (!values.title) {
            errors.title = "Campo obligatorio";
        }
        if (values.title && values.title.length < 4) {
            errors.title = "El título del libro debe tener más de 4 letras";
        }
        return errors;
    };

    const onDeleteButtonClicked = (book) => {
        //dispatch(authorDelete(currentUser, authenticated, book._id));
    };

    const onEditButtonClicked = (book) => {
        dispatch(selectBook(book));
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        console.log("CERRRAR");
        setShowEditModal(false);
    };

    return (
        <Book
            book={book}
            onDeleteButtonClicked={onDeleteButtonClicked}
            onEditButtonClicked={onEditButtonClicked}
            isSaving={isSaving}
            onSubmit={onSubmit}
            validate={validate}
            showEditModal={showEditModal}
            handleCloseEditModal={handleCloseEditModal}
        />
    );
};

export default BookContainer;
