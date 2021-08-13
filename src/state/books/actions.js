import { FETCHING_BOOKS, FETCHING_BOOKS_ERROR, FETCHING_BOOKS_SUCCESS } from "../constants";
import axios from "axios";

const API_URL =
    process.env.NODE_ENV === "production" ? "https://serene-tor-54135.herokuapp.com" : "http://localhost:5000/api";

export const handleFetchingBooks = () => async (dispatch) => {
    dispatch({ type: FETCHING_BOOKS });
    try {
        const response = await axios.get(API_URL + "/books");
        dispatch({ type: FETCHING_BOOKS_SUCCESS, payload: response.data });
    } catch (e) {
        dispatch({ type: FETCHING_BOOKS_ERROR, payload: "Hubo un error al intentar actualizar los libros." });
    }
};
