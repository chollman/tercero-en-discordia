import React from "react";
import FormBootstrap from "react-bootstrap/Form";
import { Field, Form } from "react-final-form";
import Button from "react-bootstrap/Button";
import TextFieldValidatedAdapter from "../../../../../ui/forms/text-field-validated-adapter";

const CategoryForm = ({ onSubmit, validate, formData = {}, setIsEditing = false, isEditing }) => {
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={{
                ...formData,
            }}
            render={({ handleSubmit, submitting }) => (
                <FormBootstrap id="category-form" className="edit-category-form" onSubmit={handleSubmit}>
                    <Field
                        name="name"
                        component={TextFieldValidatedAdapter}
                        type="text"
                        placeholder="Ingresar nombre"
                    />
                    {isEditing && (
                        <>
                            <Button variant="primary" size="sm" type="submit" disabled={submitting}>
                                Confirmar
                            </Button>
                            <Button
                                variant="secondary"
                                size="sm"
                                disabled={submitting}
                                onClick={() => setIsEditing(false)}
                            >
                                <i className="fas fa-times" />
                            </Button>
                        </>
                    )}
                </FormBootstrap>
            )}
        />
    );
};

export default CategoryForm;
