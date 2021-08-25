import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewAuthors from "../../../components/forms/authors/view-authors";
import { authorCreate, handleFetchingAuthors } from "../../../../../state/authors/actions";

const ViewAuthorsContainer = () => {
    const dispatch = useDispatch();

    const [showEditModal, setShowEditModal] = useState(false);

    const authors = useSelector((state) => state.authors);
    const { currentUser, authenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(handleFetchingAuthors());
    }, [dispatch]);

    const onSubmit = (formProps) => {
        dispatch(authorCreate(currentUser, authenticated, formProps));
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

    const onCreateAuthorButtonClicked = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    return (
        <ViewAuthors
            authors={authors}
            handleCloseEditModal={handleCloseEditModal}
            showEditModal={showEditModal}
            onCreateAuthorButtonClicked={onCreateAuthorButtonClicked}
            validate={validate}
            onSubmit={onSubmit}
        />
    );
};

export default ViewAuthorsContainer;
