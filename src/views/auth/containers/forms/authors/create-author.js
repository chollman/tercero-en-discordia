import React, { useState } from "react";
import { authorCreate } from "../../../../../state/authors/actions";
import { useDispatch, useSelector } from "react-redux";
import CreateAuthor from "../../../components/forms/authors/create-author";

const CreateAuthorContainer = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [isSaving, setIsSaving] = useState(false);

    const { currentUser, authenticated } = useSelector((state) => state.auth);

    const onSubmit = (formProps) => {
        setIsSaving(true);
        dispatch(
            authorCreate(currentUser, authenticated, formProps, () => {
                setIsSaving(false);
                setMessage("Autor creado con éxito");
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

    return <CreateAuthor message={message} validate={validateForm} onSubmit={onSubmit} isSaving={isSaving} />;
};

export default CreateAuthorContainer;
