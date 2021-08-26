import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryCreate, handleFetchingCategories } from "../../../../../state/categories/actions";
import ViewCategories from "../../../components/forms/categories/view-categories";

const ViewCategoriesContainer = () => {
    const dispatch = useDispatch();

    const [showEditModal, setShowEditModal] = useState(false);

    const categories = useSelector((state) => state.categories);
    const { currentUser, authenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(handleFetchingCategories());
    }, [dispatch]);

    const onSubmit = (formProps) => {
        dispatch(categoryCreate(currentUser, authenticated, formProps));
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

    const onCreateCategoryButtonClicked = () => {
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
    };

    return (
        <ViewCategories
            categories={categories}
            handleCloseEditModal={handleCloseEditModal}
            onCreateCategoryButtonClicked={onCreateCategoryButtonClicked}
            showEditModal={showEditModal}
            onSubmit={onSubmit}
            validate={validate}
        />
    );
};

export default ViewCategoriesContainer;
