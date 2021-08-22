import { CATEGORY_CREATE, CATEGORY_CREATE_SUCCESS, CATEGORY_CREATE_ERROR } from "../constants";
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
        callback();
    } catch (e) {
        dispatch({ type: CATEGORY_CREATE_ERROR, payload: "Hubo un error al intentar crear la categoría." });
    }
};
