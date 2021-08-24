import React, { useState } from "react";
import { categoryDelete, categoryEdit } from "../../../../../state/categories/actions";
import { useDispatch, useSelector } from "react-redux";
import CategoryForm from "../../../components/forms/categories/category-form";

const CategoryFormContainer = ({ category }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    let [formData, setFormData] = useState({
        name: "",
    });

    const { currentUser, authenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onSubmit = (formProps) => {
        setIsSaving(true);
        dispatch(
            categoryEdit(currentUser, authenticated, category._id, formProps, () => {
                setIsEditing(false);
                setIsSaving(false);
            })
        );
    };

    const onDeleteButtonClicked = () => {
        dispatch(categoryDelete(currentUser, authenticated, category._id));
    };

    const onEditButtonClicked = () => {
        setFormData({
            name: category.name,
        });
        setIsEditing(true);
    };

    return (
        <CategoryForm
            category={category}
            onEditButtonClicked={onEditButtonClicked}
            onDeleteButtonClicked={onDeleteButtonClicked}
            onSubmit={onSubmit}
            isEditing={isEditing}
            isSaving={isSaving}
            formData={formData}
            setIsEditing={setIsEditing}
        />
    );
};

export default CategoryFormContainer;
