import { AUTH_USER, AUTH_ERROR } from "../constants";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:5000";
console.log(process.env);

export const signup = (formProps, callback) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL + "/signup", formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem("token", response.data.payload);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: "El mail ya está en uso" });
    }
};

export const logout = (callback) => {
    localStorage.removeItem("token");
    callback();
    return {
        type: AUTH_USER,
        payload: "",
    };
};

export const login = (formProps, callback) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL + "/signin", formProps);
        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem("token", response.data.payload);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: "Las credenciales no son válidas" });
    }
};
