import {
    AUTHOR_CREATE,
    AUTHOR_CREATE_SUCCESS,
    AUTHOR_CREATE_ERROR,
    FETCHING_AUTHORS,
    FETCHING_AUTHORS_SUCCESS,
    FETCHING_AUTHORS_ERROR,
    AUTHOR_DELETE,
    AUTHOR_DELETE_SUCCESS,
    AUTHOR_DELETE_ERROR,
    AUTHOR_EDIT,
    AUTHOR_EDIT_SUCCESS,
    AUTHOR_EDIT_ERROR,
} from "../constants";
import axios from "axios";
import { rawToForm } from "../../utils/utils";

const API_URL = process.env.REACT_APP_API_URL;

export const authorCreate = (currentUser, token, formProps, callback) => async (dispatch) => {
    const form = rawToForm(formProps);
    dispatch({ type: AUTHOR_CREATE });
    try {
        const response = await axios.post(API_URL + "/authors/" + currentUser, form, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: AUTHOR_CREATE_SUCCESS, payload: response.data });
        if (callback) {
            callback();
        }
    } catch (e) {
        console.log(e);
        dispatch({ type: AUTHOR_CREATE_ERROR, payload: "Hubo un error al intentar crear el autor." });
    }
};

export const handleFetchingAuthors = () => async (dispatch) => {
    dispatch({ type: FETCHING_AUTHORS });
    try {
        const response = await axios.get(API_URL + "/authors");
        dispatch({ type: FETCHING_AUTHORS_SUCCESS, payload: response.data });
    } catch (e) {
        dispatch({ type: FETCHING_AUTHORS_ERROR, payload: "Hubo un error al intentar actualizar los autores." });
    }
};

export const authorDelete = (currentUser, token, authorId, callback) => async (dispatch) => {
    dispatch({ type: AUTHOR_DELETE });
    try {
        const response = await axios.delete(API_URL + "/authors/" + authorId + "/" + currentUser, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: AUTHOR_DELETE_SUCCESS, payload: { data: response.data, authorId } });
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({ type: AUTHOR_DELETE_ERROR, payload: "Hubo un error al intentar eliminar el autor." });
    }
};

export const authorEdit = (currentUser, token, authorId, formProps, callback) => async (dispatch) => {
    const form = rawToForm(formProps);
    dispatch({ type: AUTHOR_EDIT });
    try {
        const response = await axios.put(API_URL + "/authors/" + authorId + "/" + currentUser, form, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: AUTHOR_EDIT_SUCCESS, payload: { data: response.data, authorId } });
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({ type: AUTHOR_EDIT_ERROR, payload: "Hubo un error al intentar modificar el autor." });
    }
};
