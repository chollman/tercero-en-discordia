import React, { useState } from "react";
import Book from "../../../components/forms/books/book";
import { useDispatch, useSelector } from "react-redux";
import { bookDelete, bookEdit, selectBook } from "../../../../../state/books/actions";
import { extractIds } from "../../../../../utils/utils";
import { FORM_ERROR } from "final-form";

const BookContainer = ({ book }) => {
    const dispatch = useDispatch();

    const [isSaving, setIsSaving] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    let [formData, setFormData] = useState({
        title: "",
        description: "",
        authors: [],
        isbn: "",
        numberOfPages: "",
        publicationDate: "",
        categories: [],
        linkToEbook: "",
        linkToPaperBook: "",
    });

    const { currentUser, authenticated } = useSelector((state) => state.auth);

    const onSubmit = (formProps, formApi) => {
        setIsSaving(true);

        if (!formProps.categories || formProps.categories.length === 0) {
            return { [FORM_ERROR]: "El libro debe tener al menos una categoría" };
        }
        if (!formProps.authors || formProps.authors.length === 0) {
            return { [FORM_ERROR]: "El libro debe tener al menos un autor" };
        }
        if (formApi.getState().pristine) {
            return { [FORM_ERROR]: "Debe modificar al menos algún campo para editar el libro." };
        }

        formProps.authors = extractIds(formProps.authors);
        formProps.categories = extractIds(formProps.categories);

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
            errors.title = "El título debe tener más de 4 letras";
        }
        if (!values.categories || values.categories.length === 0) {
            errors.categories = "El libro debe tener al menos una categoría";
        }
        return errors;
    };

    const onDeleteButtonClicked = (book) => {
        dispatch(bookDelete(currentUser, authenticated, book._id));
    };

    const onEditButtonClicked = (book) => {
        dispatch(selectBook(book));
        setFormData({
            title: book.title || "",
            description: book.description || "",
            authors: book.authors || [],
            isbn: book.isbn || "",
            numberOfPages: book.numberOfPages || "",
            publicationDate: book.publicationDate || "",
            categories: book.categories || [],
            linkToEbook: book.linkToEbook || "",
            linkToPaperBook: book.linkToPaperBook || "",
        });
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const imageHash = Date.now();

    return (
        <Book
            book={book}
            onDeleteButtonClicked={onDeleteButtonClicked}
            onEditButtonClicked={onEditButtonClicked}
            isSaving={isSaving}
            formData={formData}
            onSubmit={onSubmit}
            validate={validate}
            showEditModal={showEditModal}
            handleCloseEditModal={handleCloseEditModal}
            imageHash={imageHash}
        />
    );
};

export default BookContainer;
