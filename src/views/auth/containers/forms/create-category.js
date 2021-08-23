import React, { useState } from "react";
import { categoryCreate } from "../../../../state/categories/actions";
import { useDispatch, useSelector } from "react-redux";
import CreateCategory from "../../components/forms/create-category";

const CreateCategoryContainer = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const { currentUser, authenticated } = useSelector((state) => state.auth);

    const onSubmit = (formProps) => {
        setIsSaving(true);
        dispatch(
            categoryCreate(currentUser, authenticated, formProps, () => {
                setIsSaving(false);
                setMessage("Categoría creada con éxito");
            })
        );
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Campo obligatorio";
        }
        if (values.name && values.name.length < 4) {
            errors.name = "El nombre debe tener más de 4 letras";
        }
        return errors;
    };

    return <CreateCategory message={message} validate={validateForm} onSubmit={onSubmit} isSaving={isSaving} />;
};

export default CreateCategoryContainer;
