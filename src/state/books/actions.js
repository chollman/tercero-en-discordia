import {
    FETCHING_BOOKS,
    FETCHING_BOOKS_ERROR,
    FETCHING_BOOKS_SUCCESS,
    FETCHING_BOOK,
    FETCHING_BOOK_SUCCESS,
    FETCHING_BOOK_ERROR,
    SELECT_BOOK,
    BOOK_EDIT,
    BOOK_EDIT_SUCCESS,
    BOOK_EDIT_ERROR,
} from "../constants";
import axios from "axios";
import { rawToForm } from "../../utils/utils";

const API_URL = process.env.REACT_APP_API_URL;

export const handleFetchingBooks = () => async (dispatch) => {
    dispatch({ type: FETCHING_BOOKS });
    try {
        const response = await axios.get(API_URL + "/books");
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
