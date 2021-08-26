import React from "react";
import FormBootstrap from "react-bootstrap/Form";
import { Field, Form } from "react-final-form";
import TextFieldValidatedAdapter from "../../../../../ui/forms/text-field-validated-adapter";
import TextAreaAdapter from "../../../../../ui/forms/text-area-adapter";
import FileAdapter from "../../../../../ui/forms/file-adapter";
import Image from "react-bootstrap/Image";
import TextFieldAdapter from "../../../../../ui/forms/text-field-adapter";

const AuthorForm = ({ author, validate, onSubmit, formData = {} }) => {
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            initialValues={{
                ...formData,
            }}
            render={({ handleSubmit }) => (
                <FormBootstrap id="author-form" className="edit-category-form" onSubmit={handleSubmit}>
                    <FormBootstrap.Group className="mb-3" controlId="formAuthorName">
                        <FormBootstrap.Label>Nombre</FormBootstrap.Label>
                        <Field
                            name="name"
                            component={TextFieldValidatedAdapter}
                            type="text"
                            placeholder="Ingresar nombre"
                        />
                    </FormBootstrap.Group>
                    <FormBootstrap.Group className="mb-3" controlId="formAuthorBiography">
                        <FormBootstrap.Label>Biografía</FormBootstrap.Label>
                        <Field
                            name="biography"
                            component={TextAreaAdapter}
                            type="text"
                            placeholder="Ingresar biografía"
                        />
                    </FormBootstrap.Group>
                    <FormBootstrap.Group className="mb-3" controlId="formAuthorPhoto">
                        <FormBootstrap.Label>Foto del autor</FormBootstrap.Label>
                        <Field name="photo" component={FileAdapter} type="file" />
                        {author && author.hasPhoto && (
                            <div className="author-image-wrapper">
                                <span className="author-image">
                                    <span className="image-container">
                                        <Image
                                            src={`${process.env.REACT_APP_API_URL}/authors/photo/${author._id}`}
                                            height={100}
                                        />
                                    </span>
                                </span>
                            </div>
                        )}
                    </FormBootstrap.Group>
                    <FormBootstrap.Group className="mb-3" controlId="formAuthorTwitter">
                        <FormBootstrap.Label>Link de Twitter</FormBootstrap.Label>
                        <Field
                            name="twitterLink"
                            component={TextFieldAdapter}
                            type="text"
                            placeholder="Link de Twitter"
                        />
                    </FormBootstrap.Group>
                    <FormBootstrap.Group className="mb-3" controlId="formAuthorInstagram">
                        <FormBootstrap.Label>Link de Instagram</FormBootstrap.Label>
                        <Field
                            name="instagramLink"
                            component={TextFieldAdapter}
                            type="text"
                            placeholder="Link de Instagram"
                        />
                    </FormBootstrap.Group>
                    <FormBootstrap.Group className="mb-3" controlId="formAuthorFacebook">
                        <FormBootstrap.Label>Link de Facebook</FormBootstrap.Label>
                        <Field
                            name="facebookLink"
                            component={TextFieldAdapter}
                            type="text"
                            placeholder="Link de Facebook"
                        />
                    </FormBootstrap.Group>
                </FormBootstrap>
            )}
        />
    );
};

export default AuthorForm;
