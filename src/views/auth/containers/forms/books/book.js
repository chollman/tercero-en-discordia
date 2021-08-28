import React, { useState } from "react";
import Book from "../../../components/forms/books/book";
import { useDispatch, useSelector } from "react-redux";

const BookContainer = ({ book }) => {
    const dispatch = useDispatch();

    const [isSaving, setIsSaving] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    let [formData, setFormData] = useState({
        title: "",
        description: "",
        authors: [],
        isbn: "",
        numberOfPages: 0,
        publicationDate: null,
        categories: [],
        linkToEbook: "",
        linkToPaperBook: "",
        hasCoverImage: false,
        hasBackCoverImage: false,
    });

    const { currentUser, authenticated } = useSelector((state) => state.auth);

    const onSubmit = (formProps) => {
        setIsSaving(true);
        // dispatch(
        //   authorEdit(currentUser, authenticated, book._id, formProps, () => {
        //     setIsSaving(false);
        //   })
        // );
        handleCloseEditModal();
    };

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Campo obligatorio";
        }
        if (values.name && values.name.length < 4) {
            errors.name = "El nombre debe tener más de 4 letras";
        }
        return errors;
    };

    const onDeleteButtonClicked = (book) => {
        //dispatch(authorDelete(currentUser, authenticated, book._id));
    };

    const onEditButtonClicked = (book) => {
        console.log("Book Container: Book", book);
        setFormData({
            title: book.title,
            description: book.description,
            authors: book.authors,
            isbn: book.isbn,
            numberOfPages: book.numberOfPages,
            publicationDate: book.publicationDate,
            categories: book.categories,
            linkToEbook: book.linkToEbook,
            linkToPaperBook: book.linkToPaperBook,
            hasCoverImage: book.hasCoverImage,
            hasBackCoverImage: book.hasBackCoverImage,
        });
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

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
        />
    );
};

export default BookContainer;
