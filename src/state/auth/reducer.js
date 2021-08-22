import { AUTH_USER, AUTH_ERROR } from "../constants";

const INITIAL_STATE = {
    authenticated: "",
    errorMessage: "",
    currentUser: undefined,
};

function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: action.payload.token,
                currentUser: action.payload.user._id,
                errorMessage: "",
            };
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

export default authReducer;
