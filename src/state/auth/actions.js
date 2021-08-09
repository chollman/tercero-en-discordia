import { AUTH_USER, AUTH_ERROR } from "../constants";
import axios from "axios";

export const signup = (formProps) => async (dispatch) => {
    try {
        const response = await axios.post("http://localhost:5000/signup", formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: "El mail ya está en uso" });
    }
};
