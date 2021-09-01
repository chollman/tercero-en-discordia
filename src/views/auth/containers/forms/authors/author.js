import React, { useState } from "react";
import Author from "../../../components/forms/authors/author";
import { authorDelete, authorEdit } from "../../../../../state/authors/actions";
import { useDispatch, useSelector } from "react-redux";

const AuthorContainer = ({ author }) => {
    const dispatch = useDispatch();

    const [isSaving, setIsSaving] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    let [formData, setFormData] = useState({
        name: "",
        biography: "",
        facebookLink: "",
        instagramLink: "",
        twitterLink: "",
    });

    const { currentUser, authenticated } = useSelector((state) => state.auth);

    const onSubmit = (formProps) => {
        setIsSaving(true);
        dispatch(
            authorEdit(currentUser, authenticated, author._id, formProps, () => {
                setIsSaving(false);
            })
        );
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

    const onDeleteButtonClicked = (author) => {
        dispatch(authorDelete(currentUser, authenticated, author._id));
    };

    const onEditButtonClicked = (author) => {
        setFormData({
            name: author.name,
            biography: author.biography,
            facebookLink: author.facebookLink,
            instagramLink: author.instagramLink,
            twitterLink: author.twitterLink,
        });
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    const imageHash = Date.now();

    return (
        <Author
            author={author}
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

export default AuthorContainer;
