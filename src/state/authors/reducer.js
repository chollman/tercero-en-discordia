import {
    FETCHING_AUTHORS,
    FETCHING_AUTHORS_SUCCESS,
    FETCHING_AUTHORS_ERROR,
    AUTHOR_DELETE,
    AUTHOR_DELETE_SUCCESS,
    AUTHOR_DELETE_ERROR,
    AUTHOR_EDIT_SUCCESS,
    AUTHOR_EDIT_ERROR,
} from "../constants";

const INITIAL_STATE = {
    authorsArr: [],
    isFetching: false,
    errorMessage: "",
    numberOfAuthors: 0,
};

function authorsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_AUTHORS:
        case AUTHOR_DELETE:
            return { ...state, isFetching: true };
        case FETCHING_AUTHORS_ERROR:
        case AUTHOR_DELETE_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload };
        case FETCHING_AUTHORS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                authorsArr: action.payload,
                numberOfAuthors: action.payload.length,
                errorMessage: "",
            };
        case AUTHOR_DELETE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                authorsArr: state.authorsArr.filter((element) => element._id !== action.payload.authorId),
                numberOfAuthors: state.numberOfAuthors - 1,
                errorMessage: "",
            };
        case AUTHOR_EDIT_SUCCESS:
            return {
                ...state,
                authorsArr: state.authorsArr.map((element) =>
                    element._id === action.payload.authorId ? { ...element, ...action.payload.data } : element
                ),
                errorMessage: "",
            };
        case AUTHOR_EDIT_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

export default authorsReducer;
