import {
    CATEGORY_CREATE,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_ERROR,
    FETCHING_CATEGORIES,
    FETCHING_CATEGORIES_SUCCESS,
    FETCHING_CATEGORIES_ERROR,
    CATEGORY_DELETE,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_ERROR,
    CATEGORY_EDIT,
    CATEGORY_EDIT_SUCCESS,
    CATEGORY_EDIT_ERROR,
} from "../constants";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const categoryCreate = (currentUser, token, formProps, callback) => async (dispatch) => {
    dispatch({ type: CATEGORY_CREATE });
    try {
        const response = await axios.post(API_URL + "/categories/" + currentUser, formProps, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: response.data });
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({ type: CATEGORY_CREATE_ERROR, payload: "Hubo un error al intentar crear la categoría." });
    }
};

export const handleFetchingCategories = () => async (dispatch) => {
    dispatch({ type: FETCHING_CATEGORIES });
    try {
        const response = await axios.get(API_URL + "/categories");
        dispatch({ type: FETCHING_CATEGORIES_SUCCESS, payload: response.data });
    } catch (e) {
        dispatch({ type: FETCHING_CATEGORIES_ERROR, payload: "Hubo un error al intentar actualizar las categorías." });
    }
};

export const categoryDelete = (currentUser, token, catId, callback) => async (dispatch) => {
    dispatch({ type: CATEGORY_DELETE });
    try {
        const response = await axios.delete(API_URL + "/categories/" + catId + "/" + currentUser, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: { data: response.data, catId } });
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({ type: CATEGORY_DELETE_ERROR, payload: "Hubo un error al intentar eliminar la categoría." });
    }
};

export const categoryEdit = (currentUser, token, catId, formProps, callback) => async (dispatch) => {
    dispatch({ type: CATEGORY_EDIT });
    try {
        const response = await axios.put(API_URL + "/categories/" + catId + "/" + currentUser, formProps, {
            headers: {
                authorization: token,
            },
        });
        dispatch({ type: CATEGORY_EDIT_SUCCESS, payload: { data: response.data, catId } });
        if (callback) {
            callback();
        }
    } catch (e) {
        dispatch({ type: CATEGORY_EDIT_ERROR, payload: "Hubo un error al intentar modificar la categoría." });
    }
};
