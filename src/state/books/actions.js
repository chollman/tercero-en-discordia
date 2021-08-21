import {
    FETCHING_BOOKS,
    FETCHING_BOOKS_ERROR,
    FETCHING_BOOKS_SUCCESS,
    FETCHING_BOOK,
    FETCHING_BOOK_SUCCESS,
    FETCHING_BOOK_ERROR,
} from "../constants";
import axios from "axios";

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
