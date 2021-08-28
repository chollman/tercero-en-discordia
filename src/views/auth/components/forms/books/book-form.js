import React from "react";
import FormBootstrap from "react-bootstrap/Form";
import { Field, Form } from "react-final-form";
import TextFieldValidatedAdapter from "../../../../../ui/forms/text-field-validated-adapter";
import TextAreaAdapter from "../../../../../ui/forms/text-area-adapter";
import FileAdapter from "../../../../../ui/forms/file-adapter";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import TextFieldAdapter from "../../../../../ui/forms/text-field-adapter";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import Button from "react-bootstrap/Button";

const BookForm = ({ book, validate, onSubmit, formData = {} }) => {
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            mutators={{
                ...arrayMutators,
            }}
            initialValues={{
                ...formData,
            }}
            render={({
                handleSubmit,
                form: {
                    mutators: { push },
                },
            }) => (
                <FormBootstrap id="book-form" className="edit-category-form" onSubmit={handleSubmit}>
                    <FormBootstrap.Group className="mb-3" controlId="formBookTitle">
                        <FormBootstrap.Label>Título</FormBootstrap.Label>
                        <Field
                            name="title"
                            component={TextFieldValidatedAdapter}
                            type="text"
                            placeholder="Ingresar título"
                        />
                    </FormBootstrap.Group>
                    <FormBootstrap.Group className="mb-3" controlId="formBookDescription">
                        <FormBootstrap.Label>Descripción</FormBootstrap.Label>
                        <Field
                            name="description"
                            component={TextAreaAdapter}
                            type="text"
                            placeholder="Ingresar descripción"
                        />
                    </FormBootstrap.Group>
                    <FormBootstrap.Row>
                        <FormBootstrap.Group as={Col} className="mb-3" controlId="formBookAuthors">
                            <FormBootstrap.Label>Autores</FormBootstrap.Label>
                            <FieldArray name="authors">
                                {({ fields }) =>
                                    fields.map((author, index) => {
                                        return (
                                            <FormBootstrap.Row key={`${author}._id`}>
                                                <Col className="mb-1">
                                                    <Field
                                                        name={`${author}.name`}
                                                        type="text"
                                                        component={TextFieldAdapter}
                                                        placeholder="Buscar autor"
                                                    />
                                                </Col>
                                                <Col className="mb-1" md="auto">
                                                    <Button
                                                        variant="outline-secondary"
                                                        onClick={() => fields.remove(index)}
                                                    >
                                                        <i className="fas fa-times" />
                                                    </Button>
                                                </Col>
                                            </FormBootstrap.Row>
                                        );
                                    })
                                }
                            </FieldArray>
                            <Button variant="primary" onClick={() => push("authors", undefined)}>
                                Agregar autor
                            </Button>
                        </FormBootstrap.Group>
                    </FormBootstrap.Row>
                    <FormBootstrap.Row>
                        <FormBootstrap.Group as={Col} className="mb-3" controlId="formBookISBN">
                            <FormBootstrap.Label>ISBN</FormBootstrap.Label>
                            <Field name="isbn" component={TextFieldAdapter} type="text" placeholder="Ingresar ISBN" />
                        </FormBootstrap.Group>
                        <FormBootstrap.Group as={Col} className="mb-3" controlId="formBookPages">
                            <FormBootstrap.Label>Cantidad de páginas</FormBootstrap.Label>
                            <Field
                                name="numberOfPages"
                                component={TextFieldAdapter}
                                type="text"
                                placeholder="Número de páginas"
                            />
                        </FormBootstrap.Group>
                    </FormBootstrap.Row>
                    <FormBootstrap.Row>
                        <FormBootstrap.Group as={Col} className="mb-3" controlId="formBookDate">
                            <FormBootstrap.Label>Fecha de publicación</FormBootstrap.Label>
                            <Field
                                name="publicationDate"
                                component={TextFieldAdapter}
                                type="text"
                                placeholder="Formato Mes/Día/Año"
                            />
                        </FormBootstrap.Group>
                    </FormBootstrap.Row>
                    <FormBootstrap.Row>
                        <FormBootstrap.Group as={Col} className="mb-3" controlId="formBookCategories">
                            <FormBootstrap.Label>Categorías</FormBootstrap.Label>
                            <FieldArray name="categories">
                                {({ fields }) =>
                                    fields.map((category, index) => {
                                        return (
                                            <FormBootstrap.Row key={`${category}._id`}>
                                                <Col className="mb-1">
                                                    <Field
                                                        name={`${category}.name`}
                                                        type="text"
                                                        component={TextFieldAdapter}
                                                        placeholder="Buscar categoría"
                                                    />
                                                </Col>
                                                <Col className="mb-1" md="auto">
                                                    <Button
                                                        variant="outline-secondary"
                                                        onClick={() => fields.remove(index)}
                                                    >
                                                        <i className="fas fa-times" />
                                                    </Button>
                                                </Col>
                                            </FormBootstrap.Row>
                                        );
                                    })
                                }
                            </FieldArray>
                            <Button variant="primary" onClick={() => push("categories", undefined)}>
                                Agregar categoría
                            </Button>
                        </FormBootstrap.Group>
                    </FormBootstrap.Row>
                    <FormBootstrap.Row>
                        <FormBootstrap.Group as={Col} className="mb-3" controlId="formBookCover">
                            <FormBootstrap.Label>Tapa</FormBootstrap.Label>
                            <Field name="coverImage" component={FileAdapter} type="file" />
                        </FormBootstrap.Group>
                        {book && book.hasCoverImage && (
                            <Col className="mb-3" md="auto">
                                <div className="book-image-wrapper">
                                    <span className="book-image">
                                        <span className="image-container">
                                            <Image
                                                src={`${process.env.REACT_APP_API_URL}/books/cover/${book._id}`}
                                                height={66}
                                            />
                                        </span>
                                    </span>
                                </div>
                            </Col>
                        )}
                    </FormBootstrap.Row>
                    <FormBootstrap.Row>
                        <FormBootstrap.Group as={Col} className="mb-3" controlId="formBookBackCover">
                            <FormBootstrap.Label>Contratapa</FormBootstrap.Label>
                            <Field name="backCoverImage" component={FileAdapter} type="file" />
                        </FormBootstrap.Group>
                        {book && book.hasBackCoverImage && (
                            <Col className="mb-3" md="auto">
                                <div className="book-image-wrapper">
                                    <span className="book-image">
                                        <span className="image-container">
                                            <Image
                                                src={`${process.env.REACT_APP_API_URL}/books/backcover/${book._id}`}
                                                height={66}
                                            />
                                        </span>
                                    </span>
                                </div>
                            </Col>
                        )}
                    </FormBootstrap.Row>
                    <FormBootstrap.Group className="mb-3" controlId="formBookEbookLink">
                        <FormBootstrap.Label>Link a Ebook</FormBootstrap.Label>
                        <Field name="linkToEbook" component={TextFieldAdapter} type="text" placeholder="Ingresar URL" />
                    </FormBootstrap.Group>
                    <FormBootstrap.Group className="mb-3" controlId="formBookPaperLink">
                        <FormBootstrap.Label>Link a libro de papel</FormBootstrap.Label>
                        <Field
                            name="linkToPaperBook"
                            component={TextFieldAdapter}
                            type="text"
                            placeholder="Ingresar URL"
                        />
                    </FormBootstrap.Group>
                </FormBootstrap>
            )}
        />
    );
};

export default BookForm;
