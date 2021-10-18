import {
    BOOK_CREATE,
    BOOK_CREATE_ERROR,
    BOOK_CREATE_SUCCESS,
    BOOK_DELETE,
    BOOK_DELETE_ERROR,
    BOOK_DELETE_SUCCESS,
    BOOK_EDIT,
    BOOK_EDIT_ERROR,
    BOOK_EDIT_SUCCESS,
    FETCHING_BOOK,
    FETCHING_BOOK_CATEGORIES,
    FETCHING_BOOK_CATEGORIES_ERROR,
    FETCHING_BOOK_CATEGORIES_SUCCESS,
    FETCHING_BOOK_ERROR,
    FETCHING_BOOK_SUCCESS,
    FETCHING_BOOKS,
    FETCHING_BOOKS_ERROR,
    FETCHING_BOOKS_SUCCESS,
    SELECT_BOOK,
    FETCHING_RELATED_BOOKS,
    FETCHING_RELATED_BOOKS_SUCCESS,
    FETCHING_RELATED_BOOKS_ERROR,
} from "../constants";
import axios from "axios";
import { rawToForm } from "../../utils/utils";

const API_URL = process.env.REACT_APP_API_URL;

export const handleFetchingBooks =
    (limit = undefined) =>
    async (dispatch) => {
        dispatch({ type: FETCHING_BOOKS });
        try {
            const response = await axios.get(`${API_URL}/books?limit=${limit}`);
            dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: response.data });
        } catch (e) {
            dispatch({ type: FETCHING_BOOKS_ERROR, payload: "Hubo un error al intentar actualizar los libros." });
        }
    };

export const handleFetchingBook = (bookId) => async (dispatch) => {
    dispatch({ type: FETCHING_BOOK });
    try {
        const response = await axios.get(API_URL + "/books/" + bookId);
        dispatch({ type: FETCHING_BOOK_SUCCESS, payload: response.data });
    } catch (e) {
        dispatch({ type: FETCHING_BOOK_ERROR, payload: "Hubo un error al intentar actualizar el libro." });
    }
};

export const selectBook = (book) => {
    return { type: SELECT_BOOK, book };
};

export const bookDelete = (currentUser, token, bookId, callback) => async (dispatch) => {
    dispatch({ type: BOOK_DELETE });
    try {
        const response = await axios.delete(API_URL + "/books/" + bookId + "/" + currentUser, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: BOOK_DELETE_SUCCESS, payload: { data: response.data, bookId } });
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({ type: BOOK_DELETE_ERROR, payload: "Hubo un error al intentar eliminar el libro." });
    }
};

export const bookEdit = (currentUser, token, bookId, formProps, callback) => async (dispatch) => {
    const form = rawToForm(formProps);
    dispatch({ type: BOOK_EDIT });
    try {
        const response = await axios.put(API_URL + "/books/" + bookId + "/" + currentUser, form, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: BOOK_EDIT_SUCCESS, payload: { data: response.data, bookId } });
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({ type: BOOK_EDIT_ERROR, payload: "Hubo un error al intentar modificar el libro." });
    }
};

export const bookCreate = (currentUser, token, formProps, callback) => async (dispatch) => {
    const form = rawToForm(formProps);
    dispatch({ type: BOOK_CREATE });
    try {
        const response = await axios.post(API_URL + "/books/" + currentUser, form, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: BOOK_CREATE_SUCCESS, payload: response.data });
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({ type: BOOK_CREATE_ERROR, payload: "Hubo un error al intentar crear el libro." });
    }
};

export const handleFetchingBooksCategories = () => async (dispatch) => {
    dispatch({ type: FETCHING_BOOK_CATEGORIES });
    try {
        const response = await axios.get(API_URL + "/books/categories");
        dispatch({ type: FETCHING_BOOK_CATEGORIES_SUCCESS, payload: response.data });
    } catch (e) {
        dispatch({
            type: FETCHING_BOOK_CATEGORIES_ERROR,
            payload: "Hubo un error al intentar actualizar la lista de categorías de libros.",
        });
    }
};

export const handleFetchingBooksByCategory = (catId) => async (dispatch) => {
    dispatch({ type: FETCHING_BOOKS });
    try {
        const response = await axios.get(`${API_URL}/books?categories=${catId}`);
        dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: response.data });
    } catch (e) {
        dispatch({ type: FETCHING_BOOKS_ERROR, payload: "Hubo un error al intentar actualizar los libros." });
    }
};

export const handleFetchingRelatedBooks = (bookId) => async (dispatch) => {
    dispatch({ type: FETCHING_RELATED_BOOKS });
    try {
        const response = await axios.get(`${API_URL}/books/related/${bookId}`);
        dispatch({ type: FETCHING_RELATED_BOOKS_SUCCESS, payload: response.data });
    } catch (e) {
        dispatch({
            type: FETCHING_RELATED_BOOKS_ERROR,
            payload: "Hubo un error al intentar buscar libros relacionados.",
        });
    }
};
